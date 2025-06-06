export default function InstallSection() {
  const steps = [
    {
      number: "01",
      title: "Download",
      description: "Open Play Store or App Store",
    },
    {
      number: "02",
      title: "Install App",
      description: "The app will install automatically.",
    },
    {
      number: "03",
      title: "Ready to Use",
      description: "Sign up or log in to start exploring!",
    },
  ]

  return (
    <section className="py-20" style={{ background: "#f7f7f7" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="mb-4"
            style={{
              fontFamily: "ITC Avant Garde Gothic Std",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "56px",
              color: "#222",
              letterSpacing: "-0.03em",
            }}
          >
            How to Install Our App
          </h2>
          <p
            style={{
              fontFamily: "ITC Avant Garde Gothic Std",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#222",
              marginBottom: "32px"
            }}
          >
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6 md:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center w-full md:w-auto">
              <span
                style={{
                  fontFamily: "ITC Avant Garde Gothic Std",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: idx === 0 ? "#FF5349" : "#222",
                  marginRight: "12px",
                  marginLeft: idx === 0 ? 0 : "12px",
                }}
              >
                {step.number}
              </span>
              {idx < steps.length - 1 && (
                <div className="flex-1 border-t border-gray-400 mx-2 md:mx-4" />
              )}
            </div>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md text-center px-6 py-10"
              style={{
                fontFamily: "ITC Avant Garde Gothic Std",
                boxShadow: "0 4px 24px 0 #0001",
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
