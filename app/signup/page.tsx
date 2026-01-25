'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    companyName: '',
    role: 'Business Leader'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            company_name: formData.companyName,
            role: formData.role,
          },
        },
      })

      if (signUpError) throw signUpError

      if (data.user) {
        // Since email confirmation is skipped (should be configured in Supabase dashboard),
        // we might be able to log in immediately or we are already logged in depending on Supabase settings.
        // For testing, let's try to sign in immediately to ensure session is active.
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })
        if (signInError) throw signInError
        
        router.push('/dashboard')
        router.refresh()
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A192F] px-4 py-12">
      <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#0A192F] border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0A192F] border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none"
              placeholder="ceo@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#0A192F] border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Company Name</label>
            <input
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-[#0A192F] border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none"
              placeholder="Acme Corp"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-[#0A192F] border border-gray-700 rounded p-3 text-white focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="Business Leader">Business Leader</option>
              <option value="CEO">CEO</option>
              <option value="Founder">Founder</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded hover:bg-[#B5952F] transition disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-[#D4AF37] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
