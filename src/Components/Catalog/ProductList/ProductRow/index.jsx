import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductInfo from '../ProductRow/ProductInfo';
import ConfigureProducts from '../ProductRow/ConfigureProducts'

import './styles.css'


class ProductRow extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { product } = this.props;
        return (
            <Grid padded className='rowHover'>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <ProductInfo product={product}/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <ConfigureProducts/>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
           
        )
    }
}
export default ProductRow;
