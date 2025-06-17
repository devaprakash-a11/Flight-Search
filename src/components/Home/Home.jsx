import './Home.scss'

const Home = () => (
  <section id="home" className="home">
    {/* video or fallback image */}
    <video
      className="home__media"
      src="src/assets/video.mp4"
      autoPlay loop muted playsInline
    />
    <div className="home__overlay" />
    <div className="home__content" data-aos="fade-up">
      <h1>Explore the world with JOE Airlines</h1>
      <p>Book cheap, flexible flights with award-winning service.</p>
      <a href="#search-section" className="btn">Start&nbsp;Booking</a>
    </div>
  </section>
)

export default Home
