import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const [items, setItems] = useState(null);  
  const [filteredItems, setFilteredItems] = useState(null);
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const [order, setOrder] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase()
      ));
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()
      ));
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      order,
      items,
      count,
      setItems,
      setCount,
      setOrder,
      cartProducts,
      productToShow,
      filteredItems,
      searchByTitle,
      setCartProducts,
      setSearchByTitle,
      searchByCategory,
      setProductToShow,
      openProductDetail,
      closeProductDetail,
      isCheckoutSideMenu,
      isProductDetailOpen,
      setSearchByCategory,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      setIsCheckoutSideMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
