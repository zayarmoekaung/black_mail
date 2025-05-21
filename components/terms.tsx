import Link from 'next/link';

export default function TermsAndPrivacy() {
  return (
    <div className="bg-gray-900 text-white font-sans py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Sticky Nav Links */}
        <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-md py-4 mb-8 rounded-b-lg shadow-lg shadow-cyan-500/20">
          <div className="flex justify-center space-x-8">
            <Link href="#terms" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-bold text-lg">
              Terms & Yeet
            </Link>
            <Link href="#privacy" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-bold text-lg">
              Privacy Vibes
            </Link>
          </div>
        </nav>

        {/* Terms and Conditions */}
        <section id="terms" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-pulse">
            Terms & Conditions: The Blackmail.monster Yeet-Fest
          </h2>
          <div className="bg-gray-800 p-8 rounded-b-lg shadow-2xl shadow-cyan-500/30 border-l-4 border-cyan-400 transition-transform hover:scale-[1.02]">
            <p className="mb-6 text-gray-300 text-lg leading-relaxed">
              Yo, what’s poppin’? You’re vibin’ on <a href="https://blackmail.monster" className="text-cyan-400 hover:underline decoration-wavy">blackmail.monster</a>, the most *sus AF* email service in the multiverse. This ain’t real blackmail—it’s a straight-up troll for the clout, no cap. By using this, you’re down for the meme life. Here’s the tea, spilled:
            </p>
            <ul className="list-none pl-6 mb-6 space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🔥</span>
                <div>
                  <strong>Big Troll Energy Only</strong>: This site’s for sending emails that hit harder than a *Fortnite W*. Don’t be that guy tryna use it for actual shady biz—keep it 100 for the lulz.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🚫</span>
                <div>
                  <strong>No Yeeting Our Drip</strong>: Don’t yoink our site’s code or aesthetic. This is our *vibe check*, fam—respect the sauce.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">💀</span>
                <div>
                  <strong>Bet, You’re Accountable</strong>: If you send cursed emails and get clapped by the universe (or the cops), that’s your L, not ours. We’re just the plug, not your mom.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">⚡</span>
                <div>
                  <strong>Service Is Bussin’… Usually</strong>: We keep the servers lit, but if they crash harder than your Wi-Fi during a Zoom call, don’t come for us. No refunds, just vibes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🗑️</span>
                <div>
                  <strong>Skrrt, We Can Yeet You</strong>: Act sus, and we’ll yeet your account into the shadow realm faster than you can say “ratio.” No takesies-backsies.
                </div>
              </li>
            </ul>
            <p className="text-gray-400 italic text-center">
              TL;DR: This is a troll, don’t @ us with serious vibes. Use it, love it, but don’t be a Karen. Check this *Distracted Boyfriend* meme—we’re the side chick, not your main quest.
            </p>
            <div className="mt-4 flex justify-center">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/023/397/022.jpg" alt="Distracted Boyfriend Meme" className="w-48 h-auto rounded-lg shadow-md hover:scale-105 transition-transform" />
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-pulse">
            Privacy Policy: We Ain’t Snitchin’… Or Are We? 😈
          </h2>
          <div className="bg-gray-800 p-8 rounded-b-lg shadow-2xl shadow-cyan-500/30 border-l-4 border-cyan-400 transition-transform hover:scale-[1.02]">
            <p className="mb-6 text-gray-300 text-lg leading-relaxed">
              Aight, fam, you’re probably like, “What’s good with my data on <a href="https://blackmail.monster" className="text-cyan-400 hover:underline decoration-wavy">blackmail.monster</a>?” Spoiler: It’s all a meme, but we gotta drop this policy to keep it 💯. We’re not doxxing you like some *Among Us* impostor, no cap. Here’s the 411:
            </p>
            <ul className="list-none pl-6 mb-6 space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">👀</span>
                <div>
                  <strong>Data? What Data?</strong>: We grab whatever you yeet into our email service—your email address, maybe some spicy tea in your messages. But we’re not lurkin’ like *Drake meme* staring at your secrets.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🔒</span>
                <div>
                  <strong>We Keep It Locked</strong>: Your messages are safer than your Roblox account with 2FA. We got some high-key encryption, but don’t ask for the sauce—we’re too busy vibin’.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🤐</span>
                <div>
                  <strong>No Snitchin’</strong>: We ain’t sellin’ your data to randos or your ex who’s still in your DMs. Unless the feds pull up with a warrant, your tea stays in the group chat.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">🍗</span>
                <div>
                  <strong>Cookies? Nah, We Got Tendies</strong>: We might drop some cookies (not the edible kind, RIP) to make the site bussin’. They’re not for trackin’ you like a sus *Among Us* crewmate.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✌️</span>
                <div>
                  <strong>You Got Rights, Fam</strong>: Wanna delete your data? Slide into our DMs at <a href="mailto:contact@blackmail.monster" className="text-cyan-400 hover:underline decoration-wavy">contact@blackmail.monster</a>, and we’ll yeet it faster than a TikToker getting canceled.
                </div>
              </li>
            </ul>
            <p className="text-gray-400 italic text-center">
              TL;DR: This is a troll, we’re not actually blackmailing anyone, lmao. Your data’s chill, but we’re here for the *Poggers*, not paperwork. Peep this *Spongebob mocking* meme for anyone taking this too srsly.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <img src="https://i.kym-cdn.com/entries/icons/original/000/022/138/Drake.jpg" alt="Drake Meme" className="w-24 h-auto rounded-lg shadow-md hover:scale-105 transition-transform" />
              <img src="https://i.kym-cdn.com/entries/icons/original/000/024/574/Spongebob.jpg" alt="Spongebob Mocking Meme" className="w-24 h-auto rounded-lg shadow-md hover:scale-105 transition-transform" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}