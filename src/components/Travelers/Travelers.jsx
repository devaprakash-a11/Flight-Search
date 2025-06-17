// components/Travelers/Travelers.jsx
import './Travelers.scss'

const Travelers = () => (
  <section className="travelers section" data-aos="fade-up">
    <div className="travelers__content">
      <h2 className="travelers__title">Millions of happy travelers</h2>
      <p className="travelers__subtitle">
        See what our customers say on <a href="https://www.trustpilot.com" target="_blank" rel="noreferrer">TrustPilot</a>.
      </p>

      <div className="travelers__grid">
        <div className="travelers__card" data-aos="fade-up" data-aos-delay="100">
          <p className="travelers__quote">“Amazing service! Booking was smooth and prices were unbeatable.”</p>
          <div className="travelers__author">– Nithran.M</div>
        </div>
        <div className="travelers__card" data-aos="fade-up" data-aos-delay="200">
          <p className="travelers__quote">“JOE Airlines is my go-to for every trip. Always reliable!”</p>
          <div className="travelers__author">– Anu.R</div>
        </div>
        <div className="travelers__card" data-aos="fade-up" data-aos-delay="300">
          <p className="travelers__quote">“From support to takeoff, everything was perfect. Highly recommended.”</p>
          <div className="travelers__author">– Vaishu.S</div>
        </div>
      </div>
    </div>
  </section>
)

export default Travelers
