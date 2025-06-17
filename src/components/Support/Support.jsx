// components/Support/Support.jsx
import { FaPhoneAlt, FaComments, FaShieldAlt } from 'react-icons/fa'
import './Support.scss'

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: '24/7 Call Centre',
    desc: 'Talk to a real human whenever you need help.',
  },
  {
    icon: <FaComments />,
    title: 'Live Chat',
    desc: 'Instant answers from our travel experts.',
  },
  {
    icon: <FaShieldAlt />,
    title: '100% Secure',
    desc: 'Book with confidence – your data is safe.',
  },
]

const Support = () => (
  <section id="support" className="support section" data-aos="fade-up">
    <h2 className="support__title">We’ve got your back</h2>
    <div className="support__grid">
      {cards.map((c) => (
        <article key={c.title} className="support__card" data-aos="fade-up">
          <span className="support__icon">{c.icon}</span>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Support
