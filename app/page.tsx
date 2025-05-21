import Image from "next/image";
import localFont from 'next/font/local'
const aileron = localFont({ src: '../fonts/Anurati-Regular.otf' })
import mainbg from '@/assets/images/andras-arato-beter-bekend-als-hide-the-pain-harold-ik-heb.webp'
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src={mainbg}
          alt="hide the pain"
          className="absolute top-0 left-0 z-1 h-full"
        />
        <div className="absolute top-0 left-0 w-full z-2 h-full bg-black backdrop-blur-sm opacity-60 p-20">
          <h1 className={`${aileron.className} hero_title`}>BLACKMA I L MONSTER</h1>
          <span className={`${aileron.className} `}>The internet's  most sus email service</span>
          <p className={`text-sm md:text-lg text-gray-300  ${aileron.className} hero_text`}>
            Yo, this is <a href="https://zayarmoekaung.website" target="blank">Zayar Moe Kaung’s</a> *exclusive* email flex, droppin’ vibes so sus they’re straight-up monstrous. No real blackmail here, just big troll energy, no cap. Right now, it’s my personal playground, but maybe one day I can expand this into a full blown service and you can start blackmailing too. Stay tuned, fam!
          </p>
          <svg
            width="200"
            height="80"
            viewBox="0 0 200 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" hover:scale-105 transition-transform duration-300 left-0"
          >
            <path
              d="M150 20 Q160 30 170 20 Q180 30 190 20 L185 60 Q180 70 170 60 Q160 70 150 60 L145 20 Z"
              fill="#1c2526"
              stroke="#cccccc"
              strokeWidth="2"
            />
            <path d="M170 20 Q175 25 180 20" fill="none" stroke="#00d4ff" strokeWidth="2" />
            <text
              x="20"
              y="35"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="#ffffff"
            >
              blackmail
            </text>
            <text
              x="100"
              y="45"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontStyle="italic"
              fill="#00d4ff"
            >
              .monster
            </text>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="170" cy="20" r="3" fill="#00d4ff" filter="url(#glow)" />
          </svg>
        </div>
      </main>
    </div>
  );
}
