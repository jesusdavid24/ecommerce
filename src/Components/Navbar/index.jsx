import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';


const Navbar = () => {

  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
          >
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>All</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory('nuevo')}
          >
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Clothes</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory('electronics')}
          >
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Electronics</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory('furnitures')}
          >
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Furnitures</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory('toys')}
          >
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Toys</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/others">
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Others</span>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/50">
          jd@test.com
        </li>
        <li>
          <NavLink to="/my-orders">
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>My Orders</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account">
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>My Account</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Sign In">
            {({ isActive }) => (
              <span className={isActive ? activeStyle : ""}>Sign</span>
            )}
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
