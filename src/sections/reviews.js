"use client"
import React, { useState, useEffect } from "react"
import TestimonialCard from "./testimonial-card"


export default function ReviewsSection() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // Use randomuser.me for both names and images, and generate fake review text and rating
    fetch("https://randomuser.me/api/?results=26")
      .then((res) => (res.ok ? res.json() : { results: [] }))
      .then((data) => {
        const users = Array.isArray(data.results) ? data.results : []
        const reviewsWithImages = users.map((user, i) => ({
          name: `${user.name.first} ${user.name.last}`,
          rating: Math.floor(Math.random() * 2) + 4,
          image: user.picture.large,
          text: `This is a sample review #${i + 1}. MyBindle is awesome!`,
        }))
        setReviews(reviewsWithImages)
      })
      .catch(() => {
        setReviews([])
      })
  }, [])

  const [visibleCount, setVisibleCount] = useState(6)

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, reviews.length))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, visibleCount).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>
        {visibleCount < reviews.length && (
          <div className="text-center mt-12">
            <button
              className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              onClick={handleLoadMore}
            >
              Load More →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
