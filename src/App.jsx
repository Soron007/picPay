import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gsaptransitions from "./components/Gsaptransitions";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Gsaptransitions />
        {/* Adding Footer */}

      </BrowserRouter>
    </>
  )
}
