import { count } from 'console';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  // const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}

      >
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white text-uppercase" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>


    </div>
  )
}
