import { useState } from 'react';
import './Destinations.scss';

const cities = [
  { name: 'New York', img: 'src/assets/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_(cropped).jpg', continent: 'North America' },
  { name: 'Tokyo', img: 'src/assets/tokyo-wards-social.jpg', continent: 'Asia' },
  { name: 'Paris', img: 'src/assets/shutterstock_1193410837-1-1024x683.jpg', continent: 'Europe' },
  { name: 'London', img: 'src/assets/intro-1721232039.jpg', continent: 'Europe' },
  { name: 'Sydney', img: 'src/assets/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg', continent: 'Australia' },
  { name: 'Cairo', img: 'src/assets/182973.jpg', continent: 'Africa' },
];

const continents = ['All', ...new Set(cities.map((c) => c.continent))];

const Destinations = () => {
  const [continent, setContinent] = useState('All');

  const filteredCities =
    continent === 'All' ? cities : cities.filter((city) => city.continent === continent);

  return (
    <section className="section destinations" data-aos="fade-up">
      <div className="destinations__header">
        <h2>Explore Destinations by Continent</h2>

        <div className="destinations__filters">
          {continents.map((c) => (
            <button
              key={c}
              className={`filter-btn ${continent === c ? 'active' : ''}`}
              onClick={() => setContinent(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="destinations__grid">
        {filteredCities.map((city) => (
          <div key={city.name} className="destination-card">
            <img src={city.img} alt={city.name} />
            <div className="destination-card__label">{city.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
