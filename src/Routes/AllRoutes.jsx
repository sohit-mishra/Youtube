import { Routes, Route } from "react-router-dom";
import Home from '../Component/Home';
import Navbar from '../Routes/Navbar';
import Login from "../Component/Login";
import SlideBar from '../Routes/SlideBar';
import Watch from "../Component/Watch";


export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ 
          <div style={{display:"flex"}}>
            <SlideBar />
            <Home />
          </div>
        }/>
        <Route path="/v/:videoID" element={<Watch />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
