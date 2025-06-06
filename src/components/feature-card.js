export default function FeatureCard({ icon: Icon, title, description, bgColor, iconColor }) {
  return (
    <div
      className="bg-white rounded-[21.33px] p-8 gap-[10.67px] mb-4 w-full max-w-[343px] min-h-[105px] shadow-[18.67px_20px_29.33px_0_rgba(0,0,0,0.1)] flex items-center"
    >
      <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
