import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Travelers from './components/Travelers/Travelers'
import Subscribers from './components/Subscribers/Subscribers'
import Footer from './components/Footer/Footer'
import Destinations from './components/Destinations/Destinations'
import FlightDeals from './components/FlightDeals/FlightDeals'

function App () {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <FlightDeals />
        <Destinations />
        <Search id="search-section" />
        <Support />
        <Info />
        <Lounge />
        <Travelers />
        <Subscribers />
      </main>
      <Footer />
    </>
  )
}

export default App
