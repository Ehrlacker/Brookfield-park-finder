import MainPageBackground from "../../components/MainPageBackground/MainPageBackground"
import MainNav from "../../components/MainNav/MainNav"
import HomePageDescription from "../../components/HomePageDescription/HomePageDescription"
import "./HomePage.css"
import HomePageDirections from "../../components/HomePageDirections/HomePageDirections"
import Canyon from "../../Assets/Images/Canyon.jpg"
import Trail from "../../Assets/Images/ParkTrail.jpg"

const HomePage = () => {
  return (
    <div className="HomePage flex flex-col">
      <MainNav />
      <MainPageBackground />
      <HomePageDescription />

      <div className="home-page-directions-container sm:flex justify-center items-center flex-col ">
        <HomePageDirections
          image={Canyon}
          title={"Find Your Park"}
          description={
            "Type in the letters of your selected state and find all of the national parks within that location."
          }
        />
        <HomePageDirections
          image={Trail}
          title={"Learn More"}
          description={
            "Simply click on the details button to find park information such as the par activities, location, weather and much more. "
          }
        />
      </div>
    </div>
  )
}
export default HomePage
