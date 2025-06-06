import { Apple, Play } from "lucide-react"
import Image from "next/image"


export default function FinalCtaSection() {
  return (
    <section
      style={{ background: "#FF5349" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2
              className="font-bold leading-tight text-white"
              style={{
                fontFamily: "ITC Avant Garde Gothic Std",
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "68px",
                letterSpacing: "-0.03em",
              }}
            >
              Join the Fun – Download
              <br />
              MyBindle Now!
            </h2>
            <p
              className="text-white"
              style={{
                fontFamily: "ITC Avant Garde Gothic Std",
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "32px",
                marginBottom: "32px"
              }}
            >
              Our Social platform. Your Way.
              <br />
              Connect, share, and discover in a space that&apos;s designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <Play className="w-5 h-5" />
                <span>Google Play</span>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 mt-12">
            <Image
              src="/footer2.png"
              alt="Smile Illustration 1"
              width={180}
              height={64}
              className="object-contain w-[120px] h-auto sm:w-[180px] sm:h-[64px] lg:w-[335px] lg:h-[120px] mt-[80px] sm:mt-[120px] lg:mt-[240px]"
            />
            <Image
              src="/footer1.png"
              alt="Smile Illustration 2"
              width={180}
              height={64}
              className="object-contain w-[120px] h-auto sm:w-[180px] sm:h-[64px] lg:w-[335px] lg:h-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
