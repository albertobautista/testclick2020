import React, { Component } from 'react';
import { Divider, Dimmer, Loader, Grid } from 'semantic-ui-react'
import ProductRow from './ProductRow'
import './styles.css'

import products from '../data/products'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: null
        }
    }

    componentWillMount() {
        console.log('object');
        console.log(products);
        setTimeout(() => {
            this.getProducts();
        }, 2000);

    }
    getProducts() {
        this.setState({ products })
    }

    render() {
        const { products } = this.state
        if (products == null) {
            return (
                <Grid verticalAlign='middle' centered columns={16}>
                    <Grid.Row>
                        <Grid.Column>
                            <Dimmer
                                active
                                inverted
                                className='verticalAlign'
                            >
                                <Loader indeterminate size='massive' ><h3>Cargando</h3></Loader>
                            </Dimmer>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            )

        } else {
            return (
                <div>
                    {products.map(product => <div><ProductRow key={product.IdERP} product={product} /> <Divider /></div>)}
                </div>
            )
        }
    }
}

export default ProductList;