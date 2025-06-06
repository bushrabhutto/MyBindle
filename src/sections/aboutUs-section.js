import { Video, Bell, Globe } from "lucide-react"
import Install from '../components/installaboutUs'
import Image from "next/image"


export default function AboutUs() {
  const features = [
    {
      icon: Video,
      title: "Share Videos & Posts",
      description: "Share engaging videos and content from friends and family with just one click.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get notified about important updates and never miss what matters most.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Globe,
      title: "Interest-Based Communities",
      description: "Join groups and discussions that match your interests.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section
      className="py-20 w-full"
      style={{
        background: "#F2F2F2",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto"
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/cardsideimg.png"
              alt="side image"
              width={858}
              height={897}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                background: "transparent",
              }}
            />
          </div>
          <div className="space-y-8">
            <h2
              className="font-bold"
              style={{
                fontSize: "2.5rem",
                color: "#222",
                fontFamily: "ITC Avant Garde Gothic Std",
                lineHeight: "1.2"
              }}
            >
              Where Every Click
              <br />
              Sparks a Connection!
            </h2>
            <p
              style={{
                color: "#222",
                fontSize: "1.2rem",
                fontFamily: "ITC Avant Garde Gothic Std",
                fontWeight: 600
              }}
            >
              Every interaction on MyBindle is designed to bring people closer together.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white rounded-[21.33px] p-8 gap-[10.67px] mb-4 w-full max-w-[762.67px] min-h-[157.33px]"
                  style={{
                    boxShadow:
                      "5px 5px 10px 0px rgba(0,0,0,0.1), -3px -3px 10px 0px #fff",
                  }}
                >
                  <div
                    className={`w-8 h-8 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`w-4 h-4 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Install />
    </section>
  )
}
