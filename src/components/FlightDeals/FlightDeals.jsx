import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './FlightDeals.scss'

const deals = [
  { route: 'NYC → Paris', price: '$450', img: 'src/assets/par.jpg', tag: 'Hot Deal' },
  { route: 'LA → Tokyo', price: '$650', img: 'src/assets/tokyo_1920x800.jpg', tag: 'Limited' },
  { route: 'London → Cairo', price: '$350', img: 'src/assets/cairo.jpg', tag: 'Save 20%' },
]

const FlightDeals = () => (
  <section className="section flight-deals" data-aos="fade-up">
    <p className="flight-deals__tagline">Limited-time offers</p>
    <h2 className="flight-deals__title">Top Flight Deals</h2>
    <Swiper
      spaceBetween={20}
      slidesPerView={1.25}
      grabCursor
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {deals.map((d) => (
        <SwiperSlide key={d.route}>
          <div className="deal-card">
            <div className="deal-card__img-wrap">
              <img src={d.img} alt={d.route} />
              <span className="deal-card__badge">{d.tag}</span>
            </div>
            <div className="deal-card__info">
              <h3>{d.route}</h3>
              <span>{d.price}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default FlightDeals
