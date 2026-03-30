import React from 'react';
import Card from '../UI/Card';

const Products = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => {
                    return (
                        <Card key={product.id} product={product} />
                    )
                })
            }
        </div>
    );
};

export default Products;