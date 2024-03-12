import { Routes ,Route} from "react-router-dom";
import Home from '../Component/Home';
import Watch from '../Component/Watch';

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch" element={<Watch/>}/>
      </Routes>
    </>
  )
}
