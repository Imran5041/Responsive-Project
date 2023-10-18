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
import { ProductCard, ProductViewCard, RecipieCard } from "./Components";
import { Header, ItemCarousel } from "./Containers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="imran" element={<ProductView />}></Route>
        <Route path="/view-recipie/:id" element={<RecipieView />}></Route>
        <Route path="/products/:catID/:cat" element={<ProductList />}></Route>
        <Route path="/recipies" element={<RecipieList />}></Route>
      </Routes>
      {/* <ProductCard /> */}
       {/* //<ProductViewCard />  */} 
       {/* <ProductView />
       
     */}
     {/* <ItemCarousel /> */}
      {/* <ProductCard />
      <ProductViewCard />
      <RecipieCard /> */}
    
    </div>
  );
}

export default App;
