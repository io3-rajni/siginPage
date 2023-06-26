import Navbar from "./Navbar"
import "./profile.css"
import { ImTextColor } from "react-icons/im"
import { RiErrorWarningLine } from "react-icons/ri"
import { FaGlobeAsia } from "react-icons/fa"
import { AiOutlineClockCircle, AiOutlineUser, AiOutlineTable, AiOutlineFileText } from "react-icons/ai"
const Profile = () => {
    return <>
        <div className="mainDiv">
            <Navbar />
            <div className="sidebar">
                <ul className="profile-ul">
                    <h4>Admin</h4>
                    <div className="sidebaar-section">
                        <div><AiOutlineClockCircle /></div>
                        <div>   <li>Dasboard</li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>   <AiOutlineUser /></div>
                        <div>  <li>Profile</li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>  <AiOutlineTable /></div>
                        <div>   <li>Basic table</li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>    <ImTextColor /></div>
                        <div>   <li>Icons</li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>    <FaGlobeAsia /></div>
                        <div>   <li>Google Mop</li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>  <AiOutlineFileText /></div>
                        <div>  <li>Blank Page </li></div>
                    </div>
                    <div className="sidebaar-section">
                        <div>  <RiErrorWarningLine /></div>
                        <div>     <li>Error 404</li></div>
                    </div>
                </ul>
            </div>
            <div>

                <div>
                    <ul>
                        <li>home</li>
                        <li>Profile</li>
                    </ul>
                    <div>
                        <button>Upgrade To Pro</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </>
}
export default Profile;