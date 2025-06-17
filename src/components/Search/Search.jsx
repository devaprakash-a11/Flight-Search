import { useState } from 'react'
import { FaPlaneArrival, FaPlaneDeparture, FaCalendarAlt } from 'react-icons/fa'
import './Search.scss'

const Search = (props) => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Activate button → simple alert (replace with real API later)
    alert(
      `Searching flights from ${form.from} to ${form.to} on ${form.date} … 🚀`,
    )
  }

  return (
    <section {...props} className="search section" data-aos="fade-up">
      <h2>Book your flight</h2>

      <form onSubmit={handleSubmit} className="search__form">
        <label>
          <FaPlaneDeparture />
          <input
            type="text"
            name="from"
            placeholder="From"
            required
            value={form.from}
            onChange={handleChange}
          />
        </label>

        <label>
          <FaPlaneArrival />
          <input
            type="text"
            name="to"
            placeholder="To"
            required
            value={form.to}
            onChange={handleChange}
          />
        </label>

        <label>
          <FaCalendarAlt />
          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
          />
        </label>

        <button className="btn" type="submit">
          Search flights
        </button>
      </form>
    </section>
  )
}

export default Search
