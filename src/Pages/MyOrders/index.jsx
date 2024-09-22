import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

const MyOrders = () => {

  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      <div>
        {
          context.order.map((order, index) => (
            <Link to={`/my-orders/${index}`} key={index}>
              <OrdersCard
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MyOrders;
