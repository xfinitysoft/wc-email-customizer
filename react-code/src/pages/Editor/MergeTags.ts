import product from '@xfinity/images/product.png';
import product1 from '@xfinity/images/product1.png';
import product2 from '@xfinity/images/product2.png';
export const mergeTags = {
    product_list: [
        {
            image: `${product}`,
            title: 'Product Name',
            price: '$59.99',
            url: '#',
        },
        {
            image: `${product1}`,
            title: 'Product Name',
            price: '$39.99',
            url: '#',
        },
        {
            image: `${product2}`,
            title: 'Product Name',
            price: '$49.99',
            url: '#',
        },
        {
            image: `${product}`,
            title: 'Product Name',
            price: '$59.99',
            url: '#',
        },
        {
            image: `${product1}`,
            title: 'Product Name',
            price: '$39.99',
            url: '#',
        },
        {
            image: `${product2}`,
            title: 'Product Name',
            price: '$49.99',
            url: '#',
        },
    ],
    date: {
        today: () => new Date().toDateString(),
    },
    condition: {
        isHidden: true,
        isNotHidden: false,
    },
};