import Image from "next/image"
export default function SmileSection() {
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
              Be the Reason
              <br />
              Someone Smiles Today!
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
              Join thousands of users who are already making meaningful connections and spreading joy through MyBindle.
            </p>
            <button className="bg-white text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
              Download Now
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 mt-12">
            <Image
              src="/smile1.png"
              alt="Smile Illustration 1"
              width={335}
              height={120}
              className="object-contain w-[120px] h-auto sm:w-[180px] sm:h-[64px] lg:w-[335px] lg:h-[120px] mt-[60px] sm:mt-[120px] lg:mt-[180px]"
            />
            <Image
              src="/smile2.png"
              alt="Smile Illustration 2"
              width={335}
              height={120}
              className="object-contain w-[120px] h-auto sm:w-[180px] sm:h-[64px] lg:w-[335px] lg:h-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
