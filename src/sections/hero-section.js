import Image from "next/image"


export default function HeroSection() {
  return (
    <section
      className="text-white w-full min-h-screen mx-auto overflow-hidden"
      style={{
        background: "#FF5349",
        fontFamily: "ITC Avant Garde Gothic Std",
 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="flex flex-col items-center space-y-2 mb-6">
              {/* Logo */}
              <Image
                src="/logo1.png"
                alt="Mybindle Logo"
                width={140}
                height={40}
                className="mb-2 block max-w-[140px] w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <h1
                className="font-bold break-words"
                style={{
                  fontFamily: "ITC Avant Garde Gothic Std",
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 6vw, 80px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="block leading-tight">
                  Stay Connected
                  <br />
                  Stay Social
                  <br />
                  Stay You!
                </span>
              </h1>
              <p
                className="max-w-lg text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "ITC Avant Garde Gothic Std",
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.6",
                  letterSpacing: "0%",
                }}
              >
                A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you&apos;re looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
              </p>
            </div>
            <button
              className="bg-white text-[#FF5A47] font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[12.11px] hover:bg-gray-50 transition-colors shadow-md w-full max-w-[244px] min-h-[48px]"
            >
              Get Started
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end relative mt-12 lg:mt-0 min-h-[300px] sm:min-h-[400px] md:min-h-[600px]">
            <div
              className="relative w-[180px] sm:w-[240px] md:w-[320px] lg:w-[340px] xl:w-[380px] h-[320px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px] max-w-full mx-auto rounded-[32px] bg-white shadow-[25.33px_33.33px_32px_0px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/mobile.png"
                alt="App Preview"
                fill
                className="rounded-[32px] object-cover bg-white"
                priority
                unoptimized
              />
            </div>
           
            <div
              className="absolute top-2 sm:top-4 md:top-10 -left-6 sm:-left-10 md:-left-20 bg-white text-[#222] px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg font-semibold text-xs sm:text-base md:text-[20px] flex items-center min-w-[120px] sm:min-w-[160px] md:min-w-[240px]"
            >
              <span role="img" aria-label="fire" className="mr-2">🔥</span>
              Seamless Connections
            </div>
          
            <div
              className="absolute bottom-2 sm:bottom-4 md:bottom-10 -right-6 sm:-right-10 md:-right-20 bg-white text-[#222] px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg font-semibold text-xs sm:text-base md:text-[20px] flex items-center min-w-[120px] sm:min-w-[160px] md:min-w-[240px]"
            >
              <span role="img" aria-label="compass" className="mr-2">🌐</span>
              Discover &amp; Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
