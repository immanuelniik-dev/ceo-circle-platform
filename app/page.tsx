import Link from 'next/link'

const features = [
  { name: 'View Own Profile', free: 'Yes', gathering: 'Yes', premium: 'Yes' },
  { name: 'View Free Member Name', free: 'No', gathering: 'Yes', premium: 'Yes' },
  { name: 'View Free Member Product/Service', free: 'No', gathering: 'Yes', premium: 'Yes' },
  { name: 'View Phone / Email', free: 'No', gathering: 'No', premium: 'Yes' },
  { name: 'Message Members', free: 'No', gathering: 'No', premium: 'Yes' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-yellow-600/30">
        <div className="text-2xl font-bold text-[#D4AF37]">CEO & Founder Circle</div>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-[#D4AF37] transition text-sm font-medium">Login</Link>
          <Link href="/signup" className="bg-[#D4AF37] px-4 py-2 rounded text-black font-bold hover:bg-[#B5952F] transition text-sm">Join the Circle</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-[#0A192F] to-[#0D213F]">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl tracking-tight">
          Africa's Biggest Circle for <span className="text-[#D4AF37]">Visionary Leaders</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          A curated ecosystem for CEOs, Founders, and Investors. 
          Your network is your net worth.
        </p>
        <Link href="/signup" className="bg-[#D4AF37] text-black text-lg px-10 py-4 rounded-full font-extrabold hover:scale-105 transition-all shadow-lg shadow-yellow-500/20">
          Apply for Membership
        </Link>
      </section>

      {/* Member Categories Section */}
      <section className="py-20 bg-[#0D213F]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Membership Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Member */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Free Member
              </h3>
              <p className="text-gray-400 text-sm">Basic access to create your professional profile within the circle.</p>
            </div>
            
            {/* Gathering Member */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3 flex items-center">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                Gathering Member
              </h3>
              <p className="text-gray-400 text-sm font-medium mb-2">(Paid – Event-focused)</p>
              <p className="text-gray-400 text-sm">Priority access to physical events, networking sessions, and gatherings.</p>
            </div>

            {/* Premium Member */}
            <div className="p-6 bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] px-3 py-1 font-black rounded-full">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3 flex items-center">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                Premium Member
              </h3>
              <p className="text-gray-400 text-sm font-medium mb-2">(Paid – Full Access)</p>
              <p className="text-gray-400 text-sm">Unrestricted access to the member directory, contact details, and direct messaging.</p>
            </div>

            {/* Investor / Financier */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl font-bold text-green-500 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Investor / Financier
              </h3>
              <p className="text-gray-400 text-sm font-medium mb-2">(Special Access)</p>
              <p className="text-gray-400 text-sm">Session-based access to pitch decks and founder direct lines during funding rounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-gray-400 font-medium">Feature</th>
                  <th className="py-4 px-6 text-white font-bold">Free</th>
                  <th className="py-4 px-6 text-[#D4AF37] font-bold">Gathering</th>
                  <th className="py-4 px-6 text-[#D4AF37] font-bold text-xl">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                    <td className="py-4 px-6">
                      <span className={feature.free === 'Yes' ? 'text-green-500' : 'text-gray-600'}>{feature.free}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={feature.gathering === 'Yes' ? 'text-green-500' : 'text-gray-600'}>{feature.gathering}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={feature.premium === 'Yes' ? 'text-green-500 font-bold' : 'text-gray-600'}>{feature.premium}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">&copy; 2026 CEO & Founder Circle. All rights reserved.</p>
      </footer>
    </main>
  )
}
