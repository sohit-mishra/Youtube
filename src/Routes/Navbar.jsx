import { MdOutlineMenu } from "react-icons/md";
import YoutubeLogo from '../assets/YoutubeLogo.svg';
import Video from '../assets/Video.svg';
import Bell from '../assets/Bell.svg';
import Mic from '../assets/mic.svg';
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";

import { HiDotsVertical } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContent } from "../AuthContext/AuthProvider";
import '../Routes/NavbarModule.css';

export default function Navbar() {
  const { AuthTheme } = useContext(AuthContent);

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
            <img src="https://yt3.ggpht.com/_VHd3K67L2nakO1IznyEZ0ojLR7Gzte_1o3j1XMMUEXouHjOuULYWVEGuJFBKi9Yuy5hXnNvnQ=s88-c-k-c0x00ffffff-no-rj" alt="profile" />
          </>
        ) : (
          <>
            <HiDotsVertical />
            <button>
              <FaRegUserCircle />
              Sign in
            </button>
          </>
        )}
      </div>
    </header>
  );
}
