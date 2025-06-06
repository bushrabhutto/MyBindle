import { Users, MessageCircle, Shield, Search, Building, Video } from "lucide-react"
import FeatureCard from "../components/feature-card"

export default function Services() {
  const features = [
    {
      icon: Users,
      title: "Seamless Connections",
      description: "Connect with friends, family, and like-minded individuals effortlessly with just a tap.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Share Your Story",
      description: "Upload photos, videos, and thoughts to let the world know what's happening in your life.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Video,
      title: "Real-Time Chat",
      description: "Engage in 1-on-1 or group conversations with friends, lightning-fast messaging.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data, your control. We prioritize your privacy with end-to-end encryption.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Search,
      title: "Discover & Explore",
      description: "Find trending content and communities, and follow pages that match your interests.",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: Building,
      title: "Grow Your Business",
      description: "Promote your brand and connect with customers, and build your online presence.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section
      className="flex items-center justify-center bg-[#F2F2F2] w-full max-w-[1920px] min-h-[908px] relative"
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-4 sm:mb-6">
          <h2
            className="mb-2"
            style={{
              fontFamily: "ITC Avant Garde Gothic Std",
              fontWeight: 700,
              fontSize: "2.5rem",
              lineHeight: "1.2",
              color: "#222",
              letterSpacing: "-0.03em",
            }}
          >
            Features That Keep You Hooked!
          </h2>
          <p
            style={{
              fontFamily: "ITC Avant Garde Gothic Std",
              fontWeight: 600,
              fontSize: "1.2rem",
              lineHeight: "1.5",
              color: "#222",
              marginBottom: "2rem"
            }}
          >
            Meet, Chat, Share – Anytime, Anywhere!
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="mt-8">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
