import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext); 

  const handleDelete = (id) => {
    const filteredProdcuts = context.cartProducts.filter((product) => product.id != id)
    context.setCartProducts(filteredProdcuts)
  }

  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: currentDate(),
      product: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null)
    context.closeCheckoutSideMenu(false)
  }

  return (
    <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 
      border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}
          >
          </XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="bg-black py-3 text-white w-full rounded-lg mt-3" type="button" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;
