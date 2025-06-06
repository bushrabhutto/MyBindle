import { Star } from "lucide-react"

export default function TestimonialCard({ name, rating, text, image }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-red-200 shadow-lg -mt-12 mb-2 bg-white"
        />
      )}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-700 mb-4 text-center">{text}</p>
      <div className="flex items-center">
        {/* Remove the old avatar div if image is present */}
        {!image && <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>}
        <span className="font-semibold text-gray-900">{name}</span>
      </div>
    </div>
  )
}
