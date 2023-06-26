import { useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate('/home')

    }
    // const navigate1 = useNavigate()
    const handleNavigation2 = () => {
        navigate('/home')
    }
    return <>
        <ul className="home_ul">
            <div className="litag">
                <li onClick={handleNavigation}>Home</li>
                <li onClick={() => navigate('/service')}>Service</li>
                <li onClick={() => navigate('/signin')}>Signin</li>
                <li onClick={() => navigate("/profile")}>Profile</li>
                <li>Contact</li>
                <button onClick={handleNavigation2} className="login-btn">Login</button>
            </div>
        </ul >
    </>
}
export default Navbar