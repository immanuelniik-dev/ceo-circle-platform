import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-serif">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-yellow-600/30">
        <div className="text-2xl font-bold text-yellow-500">CEO & Founder Circle</div>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-yellow-400">Login</Link>
          <Link href="/apply" className="bg-yellow-600 px-4 py-2 rounded text-black font-semibold hover:bg-yellow-500">Apply to Join</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
          Africa's Biggest Circle for <span className="text-yellow-500">Visionary Leaders</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          A curated ecosystem for CEOs, Founders, and Investors. 
          Your network is your net worth.
        </p>
        <Link href="/apply" className="bg-yellow-500 text-black text-lg px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Apply for Membership
        </Link>
      </section>

      {/* Tiers Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="p-8 border border-gray-600 rounded-lg">
            <h3 className="text-2xl font-bold text-white">Free Member</h3>
            <p className="text-gray-400 mt-2">Verified Profile Access</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• Create Verified Profile</li>
              <li>• View Platform Overview</li>
              <li>• Upgrade to Attend Events</li>
            </ul>
          </div>
           {/* Premium Tier */}
           <div className="p-8 border-2 border-yellow-500 rounded-lg bg-slate-900 relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs px-2 py-1 font-bold">RECOMMENDED</div>
            <h3 className="text-2xl font-bold text-yellow-500">Premium</h3>
            <p className="text-gray-400 mt-2">Full Access & Direct Contacts</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• View All Phone/Emails</li>
              <li>• 1-on-1 Strategy Sessions</li>
              <li>• Pitch to Investors</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}