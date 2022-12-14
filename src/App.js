import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import './Style/Darck.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="products">
        
         {/* <Route path="new" element={<New inputs={productInputs} title='Add New Product'/>}/> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
