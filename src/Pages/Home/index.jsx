import { useContext } from 'react';
import Card from '../../Components/Card';
import { ShoppingCartContext } from '../../Context';
import ProductDetail from '../../Components/ProductDetail';

const Home = () => {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We do not have anything :(</div>
      )
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center relative w-full mt-20 mb-3">
        <h1 className="font-medium mb-6 text-xl">Exclusive Products</h1>
      <input
        className="flex justify-center items-center rounded-lg border border-black w-80 p-4 mb-4"
        type="text"
        placeholder="Search a product"
        name=""
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  )
}

export default Home