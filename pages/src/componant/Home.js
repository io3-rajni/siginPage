import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import "./home.css"
const Home = () => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate('/profile')
    }
    return <>

        <div className="mainDiv">
            <Navbar />
            <div className="main-content">
                <h1 className="heading">Welcome To Home Page</h1>
                <p className="home-paara">We take energy forward - making it safer, cleaner, and more efficient for people and the planet.EXPLORE</p>
                <button onClick={handleNavigation} className="Home-btn">Welcome</button>
            </div>
        </div>
    </>
}
export default Home;