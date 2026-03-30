import React from 'react';
import Card from '../UI/Card';

const Products = ({ products, cartItems, handleAddToCart, activeProductId }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => {
                    return (
                        <Card 
                            key={product.id} 
                            product={product} 
                            cartItems={cartItems}
                            handleAddToCart={handleAddToCart}
                            activeProductId={activeProductId}
                        />
                    )
                })
            }
        </div>
    );
};

export default Products;