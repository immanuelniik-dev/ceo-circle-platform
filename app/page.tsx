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
    <main className="min-h-screen bg-[#0A192F] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-[#0A192F]/80">
        <div className="text-2xl font-bold tracking-tighter text-[#D4AF37]">CEO & <span className="text-white">CIRCLE</span></div>
        <div className="flex items-center space-x-8">
          <Link href="/login" className="text-sm font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">LOGIN</Link>
          <Link href="/signup" className="bg-[#D4AF37] px-6 py-2.5 rounded text-black font-black hover:bg-[#B5952F] transition-all text-xs tracking-widest shadow-lg shadow-yellow-500/10">JOIN NOW</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 max-w-5xl tracking-tighter leading-[0.9]">
            Africa’s Biggest Circle for <span className="text-[#D4AF37]">CEOs, Founders & Visionary Leaders</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Join a handpicked community of serious business leaders driving Africa’s next wave of growth, partnerships, and investment opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#D4AF37] text-black text-sm px-12 py-5 rounded font-black hover:scale-105 transition-all shadow-xl shadow-yellow-500/20 tracking-widest">
              APPLY TO JOIN THE CIRCLE
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Categories Section */}
      <section className="py-24 bg-[#0D213F]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black mb-4 tracking-tight">MEMBERSHIP ARCHITECTURE</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Free Membership */}
            <div className="group p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.04] transition-all flex flex-col">
              <div className="mb-6">
                <div className="text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2">ENTRY LEVEL</div>
                <h3 className="text-2xl font-black text-white">Free Membership</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-black text-[#D4AF37] mb-3 tracking-widest uppercase">Access & Permissions</h4>
                  <ul className="text-sm text-gray-400 space-y-2 font-light">
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> View and edit own profile only</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> Platform overview (Members, Investors, Courses)</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> Explore locked features with upgrade prompts</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> Eligible for Gathering or Premium upgrades</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-red-500/70 mb-3 tracking-widest uppercase">Restrictions</h4>
                  <p className="text-xs text-gray-500 font-light italic">
                    No access to other members’ contact details, messaging, booking, pitching, or direct interactions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gathering Membership */}
            <div className="group p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.04] transition-all flex flex-col relative">
              <div className="mb-6">
                <div className="text-[10px] font-black tracking-[0.2em] text-[#D4AF37] mb-2">EVENT FOCUS</div>
                <h3 className="text-2xl font-black text-white">Gathering Member</h3>
                <p className="text-[10px] text-gray-500 font-bold mt-1 tracking-widest uppercase">Paid – Per Event / Period</p>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-black text-[#D4AF37] mb-3 tracking-widest uppercase">Access & Permissions</h4>
                  <ul className="text-sm text-gray-400 space-y-2 font-light">
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> Attend physical or virtual gatherings</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> View name/product/service of Free Members</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-2">•</span> Participate in event-only discussions</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-red-500/70 mb-3 tracking-widest uppercase">Restrictions</h4>
                  <p className="text-xs text-gray-500 font-light italic">
                    Cannot view phone numbers or email addresses of members.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/signup" className="text-[10px] font-black text-[#D4AF37] hover:underline tracking-widest uppercase">Upgrade Path &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Premium Membership */}
            <div className="group p-8 bg-[#D4AF37] border border-[#D4AF37] rounded-3xl transition-all flex flex-col shadow-2xl shadow-yellow-500/20 scale-105 z-10">
              <div className="mb-6">
                <div className="text-[10px] font-black tracking-[0.2em] text-black/60 mb-2">FULL ACCESS</div>
                <h3 className="text-2xl font-black text-black">Premium Member</h3>
                <p className="text-[10px] text-black/60 font-bold mt-1 tracking-widest uppercase">The Executive Standard</p>
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-black text-black/80 mb-3 tracking-widest uppercase border-b border-black/10 pb-1">Access & Permissions</h4>
                  <ul className="text-sm text-black/80 space-y-2 font-bold">
                    <li className="flex items-start"><span className="mr-2">✓</span> Full member directory access</li>
                    <li className="flex items-start"><span className="mr-2">✓</span> View Phone & Email of all members</li>
                    <li className="flex items-start"><span className="mr-2">✓</span> One-on-One Strategic Sessions</li>
                    <li className="flex items-start"><span className="mr-2">✓</span> Live Booking & Mentor Requests</li>
                    <li className="flex items-start"><span className="mr-2">✓</span> Pitch Business to Community</li>
                    <li className="flex items-start"><span className="mr-2">✓</span> Promote Product or Service</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-black/10">
                  <h4 className="text-[10px] font-black text-black/80 mb-3 tracking-widest uppercase">Exclusive Features</h4>
                  <p className="text-xs text-black/70 font-medium">
                    Accountability Partners, Direct Communication, and Community-wide Pitching Rights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investor & Financier - Special Wide Card */}
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-900/20 to-green-500/10 border border-green-500/20 rounded-3xl mt-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-bold">$</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Investor & Financier Sessions</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-black text-green-500 mb-2 tracking-widest uppercase">Access Rules</h4>
                    <p className="text-sm text-gray-400 font-light">Available to all membership tiers via one-time payment per session.</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-green-500 mb-2 tracking-widest uppercase">Paid Access Grants</h4>
                    <p className="text-sm text-gray-400 font-light">Temporary access to investor list and financier profiles for session duration.</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right border-l border-white/5 pl-8 hidden md:block">
                <div className="text-[10px] font-black text-red-500/70 mb-1 tracking-widest uppercase">Constraint</div>
                <p className="text-xs text-gray-500 font-light italic">Automatic expiration<br/>post-session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center tracking-tight">FEATURE MATRIX</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.01]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-5 px-8 text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">Operation</th>
                  <th className="py-5 px-8 text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">Free</th>
                  <th className="py-5 px-8 text-[10px] font-black text-[#D4AF37] tracking-[0.2em] uppercase">Gathering</th>
                  <th className="py-5 px-8 text-[10px] font-black text-white tracking-[0.2em] uppercase">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                    <td className="py-5 px-8 text-sm text-gray-400 group-hover:text-white transition-colors">{feature.name}</td>
                    <td className="py-5 px-8">
                      <span className={feature.free === 'Yes' ? 'text-green-500 text-xs font-bold' : 'text-gray-700 text-xs'}>{feature.free}</span>
                    </td>
                    <td className="py-5 px-8">
                      <span className={feature.gathering === 'Yes' ? 'text-green-500 text-xs font-bold' : 'text-gray-700 text-xs'}>{feature.gathering}</span>
                    </td>
                    <td className="py-5 px-8">
                      <span className={feature.premium === 'Yes' ? 'text-[#D4AF37] text-sm font-black' : 'text-gray-700 text-xs'}>{feature.premium}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="py-24 overflow-hidden bg-[#0A192F]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white uppercase">Voices of the Circle</h2>
          <p className="text-gray-500 text-sm font-light mt-2">Trusted by the continent's most influential leaders</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
            {[
              { name: "Aliko D.", role: "Industrialist", content: "The level of networking here is unmatched. Real deals happen in the Circle." },
              { name: "Sarah J.", role: "Fintech Founder", content: "Finally, a platform that understands the African business landscape." },
              { name: "Kwame O.", role: "Venture Capitalist", content: "CEO Circle is where I find my next high-growth investment." },
              { name: "Elena M.", role: "Tech CEO", content: "The strategic sessions saved me months of trial and error." },
              { name: "John S.", role: "Retail Magnate", content: "Premium membership is an investment that pays for itself in a week." },
              { name: "Aliko D.", role: "Industrialist", content: "The level of networking here is unmatched. Real deals happen in the Circle." },
              { name: "Sarah J.", role: "Fintech Founder", content: "Finally, a platform that understands the African business landscape." },
              { name: "Kwame O.", role: "Venture Capitalist", content: "CEO Circle is where I find my next high-growth investment." },
              { name: "Elena M.", role: "Tech CEO", content: "The strategic sessions saved me months of trial and error." },
              { name: "John S.", role: "Retail Magnate", content: "Premium membership is an investment that pays for itself in a week." },
            ].map((t, i) => (
              <div key={i} className="mx-6 w-80 p-8 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-4 whitespace-normal group-hover:border-[#D4AF37]/30 transition-colors">
                <p className="text-gray-400 text-sm leading-relaxed italic">"{t.content}"</p>
                <div>
                  <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">{t.name}</h4>
                  <p className="text-gray-600 text-[10px] font-black tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Video Section */}
      <section className="py-24 bg-[#0D213F]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Circle Experience</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">Peek inside our world of high-level strategy and elite networking.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://lh3.googleusercontent.com/u/0/d/1Oj2gwL243McfwCJ1QyvicM60EMcSo_Mx" alt="Networking" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://lh3.googleusercontent.com/u/0/d/1Axnu7FwaDCT8gvqybXeioG7TEGxm1Kty" alt="Strategy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://lh3.googleusercontent.com/u/0/d/1V6B5jX41nGHyHrDUb6XNRv5SZKg9Rgk_" alt="Meeting" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 bg-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://lh3.googleusercontent.com/u/0/d/1QDZpgJgm0_mmb6UCIgLoEXNo0VGe2V-1" alt="Handshake" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Embedded Video */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-yellow-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
                <iframe 
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1lIwCpNMAcy17Hv_1-wlIBhgKtwyWiDp_/preview" 
                  title="Circle Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Event Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 rounded-full mb-6">
                <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.2em] uppercase">Upcoming Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">The CEO Summit 2026: <br/><span className="text-[#D4AF37]">Capital & Strategy</span></h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span className="text-sm">March 15-17, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span className="text-sm">Radisson Blu, Victoria Island, Lagos</span>
                </div>
              </div>
              <p className="text-gray-500 mb-10 leading-relaxed font-light">
                Three days of intensive high-level networking, private capital matching, and strategic market positioning for Africa's leading enterprises.
              </p>
            </div>
            
            <div className="w-full md:w-80 bg-white/5 border border-white/10 rounded-3xl p-8 text-center flex flex-col gap-6 backdrop-blur-sm">
              <div className="text-sm text-gray-400">Ticket Price</div>
              <div className="text-5xl font-black text-white">₦40,000</div>
              <ul className="text-[10px] text-gray-500 space-y-2 uppercase tracking-widest text-left mx-auto">
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✓</span> All Access Pass</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✓</span> Private Dinner</li>
                <li className="flex items-center gap-2"><span className="text-[#D4AF37]">✓</span> Investor Matching</li>
              </ul>
              <button className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-black font-black py-4 rounded-xl transition-all shadow-xl shadow-yellow-500/10 tracking-widest text-xs">
                PURCHASE TICKET
              </button>
              <p className="text-[9px] text-gray-600">Limited to 50 participants for exclusivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center bg-[#081526]">
        <div className="text-2xl font-bold tracking-tighter text-[#D4AF37] mb-6">CEO & CIRCLE</div>
        <p className="text-gray-600 text-xs font-black tracking-widest uppercase">&copy; 2026 CEO & Founder Circle. Powered by Adwords Integrated Services.</p>
      </footer>
    </main>
  )
}
