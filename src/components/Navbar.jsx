import{FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <nav className=" flex justify-between items-center h-20 max-w-6xl w-4/5 mx-auto">
        <NavLink to="/">
         <div>
          <img src="../logo.png" width={172} height={56} />
         </div>
        </NavLink>
        <div className=" flex  list-none items-center space-x-6 mr-5 -tracking-tighterr font-medium text-white">
          <NavLink to="/">
           <p>Home</p>
          </NavLink>
          <NavLink to="/cart"> 
            <div className=" relative">
              <FaShoppingCart className=" text-2xl"/>
              {cart.length> 0 &&
              <span className=" absolute -top-1 -right-2 bg-green-600 animate-bounce rounded-full text-white flex justify-center items-center text-xs w-5 h-5" >{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
