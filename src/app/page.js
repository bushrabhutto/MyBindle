import HeroSection from "../sections/hero-section"
import Services from '../sections/services'
import Reviews from '../sections/reviews'
import AboutUs from '../sections/aboutUs-section'
import Footer from   '../sections/finalfooter'
 import SmileSection from "../sections/smile-section"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Services />
      <AboutUs />
          <SmileSection />
          <Reviews />
          <Footer />
    </div>
  )
}
