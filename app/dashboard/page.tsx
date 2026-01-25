'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null)
  const [members, setMembers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      try {
        // 1. Get Current User
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError || !user) {
          router.push('/login')
          return
        }

        // 2. Get User's Profile Tier
        const { data: myProfile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle()
        
        if (profileError) {
          console.error('Error fetching profile:', profileError)
        }

        // If profile doesn't exist yet (e.g. trigger hasn't finished), use user metadata
        if (!myProfile) {
          setProfile({
            full_name: user.user_metadata?.full_name || 'Valued Member',
            membership_tier: 'Free',
            business_name: user.user_metadata?.company_name || ''
          })
        } else {
          setProfile(myProfile)
        }

        // 3. Get All Members (Simulating Directory)
        const { data: allMembers, error: membersError } = await supabase
          .from('profiles')
          .select('*')
        
        if (!membersError) {
          setMembers(allMembers || [])
        }
      } catch (err) {
        console.error('Dashboard error:', err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [router])

  if (loading) return <div className="min-h-screen bg-[#0A192F] flex items-center justify-center text-white">Loading Access...</div>

  if (!profile) return <div className="min-h-screen bg-[#0A192F] flex items-center justify-center text-white">Profile not found.</div>

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome, {profile.full_name}</h1>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold border border-yellow-300">
            {(profile.membership_tier || 'Free').toUpperCase()} MEMBER
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
          {members.length > 0 ? (
            members.map((member) => (
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
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded border border-slate-200">
              No other members found yet.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
