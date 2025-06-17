// components/Subscribers/Subscribers.jsx
const Subscribers = () => (
  <section id="subscribe" className="section" data-aos="fade-up">
    <h2>Get fare alerts</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert('Thanks for subscribing! ✈️')
      }}
    >
      <input
        type="email"
        placeholder="Your email"
        required
        style={{
          padding: '0.75rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: 'min(280px, 80%)',
          marginRight: '0.5rem',
        }}
      />
      <button className="btn">Subscribe</button>
    </form>
  </section>
)
export default Subscribers
