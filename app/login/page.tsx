'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    
    // 1. Try to sign up first
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password: 'temporary-password-123', // MVP: Simple password for everyone for now
      options: {
        data: { full_name: 'New Member' } // Default name
      }
    })

    if (signUpError) {
      // 2. If they exist, try to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: 'temporary-password-123',
      })
      
      if (signInError) {
        setMessage('Error: ' + signInError.message)
      } else {
        router.push('/dashboard')
      }
    } else {
      // Signup successful
      // Auto sign-in happens, push to dashboard
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-lg border border-yellow-600/30">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">Member Access</h2>
        <p className="text-gray-400 mb-6">Enter your email to enter the Circle.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Business Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:border-yellow-500 outline-none"
              placeholder="ceo@company.com"
              required 
            />
          </div>
          
          <button 
            disabled={loading}
            className="w-full bg-yellow-600 text-black font-bold py-3 rounded hover:bg-yellow-500 transition"
          >
            {loading ? 'Verifying...' : 'Enter Platform'}
          </button>
          
          {message && <p className="text-red-400 text-sm mt-2">{message}</p>}
        </form>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          *For this MVP Demo, the password is auto-set to "temporary-password-123"
        </p>
      </div>
    </div>
  )
}