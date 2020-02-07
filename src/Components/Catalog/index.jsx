import React, { Component } from 'react';
import ProductList from '../Catalog/ProductList'
import { Grid } from 'semantic-ui-react'

class Catalog extends Component{
    render(){
        return(
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={13}>
                        <ProductList></ProductList>
                        </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Catalog;