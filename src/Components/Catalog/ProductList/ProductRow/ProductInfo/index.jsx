import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import ProductRow from '..';

class ProductInfo extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { product } = this.props;
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3} verticalAlign='middle'>
                        <Image src='https://publicatefacil.com/wp-content/uploads/2019/03/office-365_grande.png' size='small' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Grid.Row>
                            <Grid.Column width={16}><Header as='h2'>{product.Nombre}</Header></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Descripcion</strong></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>{product.Descripcion}</Grid.Column>
                        </Grid.Row>
                        <br />
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Fabricante del producto:</strong> {product.Fabricante}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Tipo de producto:</strong>  {product.Tipo}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Esquema de renovación:</strong>  {product.EsquemaRenovacion}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Artículo Id:</strong> {product.IdERP}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Última actualización del producto:</strong> {product.FechaActualizado}</Grid.Column>
                        </Grid.Row>
                        <Header as='h5'>Precio del periodo</Header>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Duración del periodo:</strong> {product.FechaInicioSuscripcion} - {product.FechaFinSuscripcion}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}><strong>Precio unitario</strong> ${product.PrecioNormal} {product.MonedaPrecio}</Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default ProductInfo;