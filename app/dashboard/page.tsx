'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null)
  const [members, setMembers] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      // 1. Get Current User
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return router.push('/login')

      // 2. Get User's Profile Tier
      const { data: myProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      setProfile(myProfile)

      // 3. Get All Members (Simulating Directory)
      const { data: allMembers } = await supabase.from('profiles').select('*')
      setMembers(allMembers || [])
    }
    getData()
  }, [])

  if (!profile) return <div className="p-10 text-white">Loading Access...</div>

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome, {profile.full_name}</h1>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold border border-yellow-300">
            {profile.membership_tier.toUpperCase()} MEMBER
          </span>
        </header>

        {/* Upgrade Banner for Free Users */}
        {profile.membership_tier === 'Free' && (
          <div className="bg-slate-900 text-white p-6 rounded-lg mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-yellow-500">Unlock Full Access</h2>
              <p className="text-gray-300">You cannot see other members' contact details.</p>
            </div>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded font-bold">Upgrade Now</button>
          </div>
        )}

        {/* Member Directory */}
        <div className="grid gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded shadow-sm border border-slate-200">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-lg">{member.full_name}</h3>
                  <p className="text-slate-600">{member.business_name || 'Business Leader'}</p>
                </div>
                {/* GATING LOGIC: Only show contact info if YOU are Premium */}
                {profile.membership_tier === 'Premium' ? (
                  <div className="text-right">
                    <p className="text-green-600 font-mono text-sm">{member.email}</p>
                    <p className="text-green-600 font-mono text-sm">{member.phone}</p>
                  </div>
                ) : (
                  <div className="text-right">
                    <p className="text-slate-400 text-sm italic">Contact Locked 🔒</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}