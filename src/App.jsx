import './App.css'
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Routes/Navbar';
import SlideBar from './Routes/SlideBar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SlideBar/>
        <AllRoutes />

      </div>

    </>
  )
}

export default App
