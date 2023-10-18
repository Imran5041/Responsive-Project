import "./App.scss";
import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  ProductList,
  ProductView,
  RecipieList,
  RecipieView,
} from "./Pages";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/view-product/:id" element={<ProductView />}></Route>
        <Route path="/view-recipie/:id" element={<RecipieView />}></Route>
        <Route path="/products/:catID/:cat" element={<ProductList />}></Route>
        <Route path="/recipies" element={<RecipieList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
