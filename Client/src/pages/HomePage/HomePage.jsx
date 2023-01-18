import MainPageBackground from "../../components/MainPageBackground/MainPageBackground"
import Nav from "../../components/Nav/Nav"
import HomePageDescription from "../../components/HomePageDescription/HomePageDescription"
import "./HomePage.css"
import HomePageDirections from "../../components/HomePageDirections/HomePageDirections"
import Footer from "../../components/Footer/Footer"
import Canyon from "../../assets/Images/Canyon.jpg"
import Trail from "../../assets/Images/ParkTrail.jpg"

const HomePage = () => {
  return (
    <div className="HomePage flex flex-col">
      <Nav />
      <MainPageBackground />
      <HomePageDescription />
      <HomePageDirections
        image={Canyon}
        title={"Find Your Park"}
        description="Type in the letters of your selected state and find all of the national parks within that location."
      />
      <HomePageDirections
        image={Trail}
        title={"Learn More"}
        description="Simply click on the details button to find park information such as the par activities, location, weather and much more. "
      />
      <Footer />
    </div>
  )
}
export default HomePage
