'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0A192F]">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 text-white">
        <span className="font-bold text-xl text-[#D4AF37]">CEO CIRCLE</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          absolute lg:relative z-20 w-64 h-full bg-[#0A192F] border-r border-white/10 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#D4AF37] hidden lg:block">CEO CIRCLE</h1>
          </div>

          <nav className="mt-6 px-4 space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-white bg-white/5 rounded-lg border border-[#D4AF37]/20">
              <LayoutDashboard size={20} className="text-[#D4AF37]" />
              <span>Overview</span>
            </Link>
            
            <Link href="/dashboard/members" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Users size={20} />
              <span>Member Directory</span>
            </Link>

            <Link href="/dashboard/events" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Calendar size={20} />
              <span>Events</span>
            </Link>

            <Link href="/dashboard/resources" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <BookOpen size={20} />
              <span>Resources</span>
            </Link>

            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg w-full transition-colors"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          {children}
        </main>
      </div>
    </div>
  )
}