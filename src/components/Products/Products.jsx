import React from "react";
import { Grid } from '@mui/material';

import Product from "./Product/Product";

const products = [
    { id: 1, name: "Shoes", description: 'Running Shoes', price: '$5', image:"https://images.complex.com/complex/images/c_crop,h_1643,w_2922,x_114,y_1045/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/wd8ma3hhmlseabml9x6a/parra-nike-sb-dunk-low-dh7695-600-pair?fimg-ssr-default" },
    { id: 2, name: "Mackbook", description: 'Apple Macbook', price: '$1000', image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;