import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title={'Nuevo Cafe'} className='text-white text-uppercase' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-uppercase" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ 
            backgroundColor: '#70D1F7',
           }}
          >
          <ProductImage  />
          <ProductTitle  />
          <ProductButtons  />
        </ProductCard>
      </div>

    </div>
  )
}
