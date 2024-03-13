import { MdOutlineMenu } from "react-icons/md";
import YoutubeLogo from '../assets/YoutubeLogo.svg';
import Video from '../assets/Video.svg';
import Bell from '../assets/Bell.svg';
import Mic from '../assets/mic.svg';
import { BsSearch } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContent } from "../AuthContext/AuthProvider";
import '../Routes/NavbarModule.css';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  const { AuthTheme } = useContext(AuthContent);

  const handleClick = () => {
    navigate(`/login`);
  };
  return (
    <header>
      <div className="left">
        <MdOutlineMenu style={{ fontSize: "24px",fontStyle:"italic" }} />
        <img src={YoutubeLogo} alt="" />
      </div>

      <div className="middle">
        <input type="text" placeholder="Search"/>
        <BsSearch />
        <img src={Mic} alt="" />
      </div>

      <div className="right">
        {AuthTheme.Auth ? (
          <>
            <img src={Video} alt="" />
            <img src={Bell} alt="" />
            <img src="https://images.unsplash.com/photo-1559629819-638a8f0a4303" alt="profile" />
          </>
        ) : (
          <>
            <HiDotsVertical />
            <button onClick={handleClick}>
              <FaRegUserCircle />
              Sign in
            </button>
          </>
        )}
      </div>
    </header>
  );
}
