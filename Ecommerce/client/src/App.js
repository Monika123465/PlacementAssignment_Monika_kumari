
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";
import { redirect } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

// ab is tarike se mat karo ab is tarah se karo 

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
        <Route exact path="/" element={<Home/>} >
        
        </Route>
        <Route path="/products/:category" element={<ProductList />}>
          
        </Route>
        <Route path="/product/:id" element={ <Product />}>
          </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={ <Success />}>
         
        </Route>
        <Route path="/login">{user ? <redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <redirect to="/" />: <Register />}
        </Route>
    </Router>
  );
};

export default App;
