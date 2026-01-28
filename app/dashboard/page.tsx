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

  const tier = profile.membership_tier || 'Free'

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-serif">Executive Dashboard</h1>
            <p className="text-slate-500">Welcome back, {profile.full_name}</p>
          </div>
          <span className={`px-4 py-1 rounded-full text-xs font-bold border ${
            tier === 'Premium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 
            tier === 'Gathering' ? 'bg-blue-100 text-blue-800 border-blue-300' : 
            'bg-slate-100 text-slate-800 border-slate-300'
          }`}>
            {tier.toUpperCase()} MEMBER
          </span>
        </header>

        {/* Upgrade Banner for Non-Premium Users */}
        {tier !== 'Premium' && (
          <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border border-yellow-500/30">
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 mb-2">Elevate Your Network</h2>
              <p className="text-gray-300">
                {tier === 'Free' 
                  ? 'Upgrade to see the full directory and unlock exclusive contact details.' 
                  : 'Upgrade to Premium to access personal & business locations, email & phone contact details.'}
              </p>
            </div>
            <button className="bg-[#D4AF37] hover:bg-[#B5952F] text-black px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap">
              Upgrade to Premium
            </button>
          </div>
        )}

        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          Member Directory
          <span className="text-sm font-normal text-slate-400">({members.length} members)</span>
        </h2>

        {/* Member Directory */}
        <div className="grid gap-6">
          {members.length > 0 ? (
            members.slice(0, tier === 'Free' ? 1 : members.length).map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-[#D4AF37]/30 transition-colors">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-400 border border-slate-200">
                      {member.full_name?.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">{member.full_name}</h3>
                      <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{member.business_name || 'Business Leader'}</p>
                      
                      {/* Premium View: Locations */}
                      {tier === 'Premium' && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-400 uppercase text-[10px] font-bold">Personal Location</p>
                            <p className="text-slate-700">{member.personal_location || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 uppercase text-[10px] font-bold">Business Location</p>
                            <p className="text-slate-700">{member.business_location || 'Not provided'}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* GATING LOGIC */}
                  <div className="flex flex-col justify-center items-end border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8 min-w-[200px]">
                    {tier === 'Premium' ? (
                      <div className="space-y-2 w-full">
                        <div>
                          <p className="text-slate-400 uppercase text-[10px] font-bold">Email</p>
                          <p className="text-slate-900 font-medium">{member.email}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 uppercase text-[10px] font-bold">Phone</p>
                          <p className="text-slate-900 font-medium">{member.phone || 'N/A'}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center md:items-end">
                        <span className="flex items-center gap-1 text-slate-400 text-sm italic mb-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                          Contact Locked
                        </span>
                        <button className="text-[#D4AF37] text-xs font-bold hover:underline">Upgrade to View</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400">No members available in the directory.</p>
            </div>
          )}

          {/* Locked State for Free Users */}
          {tier === 'Free' && members.length > 1 && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 z-10" />
              <div className="space-y-6 opacity-40 select-none pointer-events-none">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="h-20 flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-100 rounded w-1/4" />
                        <div className="h-3 bg-slate-100 rounded w-1/3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-20 -mt-20 text-center pb-12">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                  Unlock {members.length - 1} More Members
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
