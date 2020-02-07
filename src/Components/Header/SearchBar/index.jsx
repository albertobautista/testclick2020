import _ from 'lodash'
import PropTypes from 'prop-types'
import CurrencyFormat from 'react-currency-format';
import React, { Component } from 'react'
import { Search, Grid, Label } from 'semantic-ui-react'
import products from '../../Catalog/data/products'


const resultRenderer = ({ nombre, descripcion, idERP, fabricante, imagen, precio, esquemaRenovacion, tipo }) => (
    <div>
        <Grid>
            <Grid.Column width={2} verticalAlign='middle'>
                <img src={imagen} width="100%" />
            </Grid.Column>
            <Grid.Column width={5}>
                <span><strong>Nombre</strong></span><br />{nombre}
            </Grid.Column>
            <Grid.Column width={3}>
                <span><strong>Descripción</strong></span><br />{descripcion}<br /><br />
                <span><strong>Artículo Id</strong></span><br />{idERP}<br /><br />
                <span><strong>Fabricante del producto</strong></span><br />{fabricante}
            </Grid.Column>
            <Grid.Column width={6}>
                <span><strong>Tipo de producto</strong></span><br />{tipo}<br /><br />
                <span><strong>Esquema de renovación</strong></span><br />{esquemaRenovacion}<br /><br />
                <span><strong>Precio Unitario</strong></span><br />
                <CurrencyFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                <br /><br />
            </Grid.Column>

        </Grid>
    </div>

)

const initialState = { isLoading: false, results: [], value: '' }

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))


const source = products.map(product => ({
    nombre: product.Nombre,
    descripcion: product.Descripcion,
    fabricante: product.Fabricante,
    imagen: 'https://publicatefacil.com/wp-content/uploads/2019/03/office-365_grande.png',
    precio: product.PrecioDescuento,
    esquemaRenovacion: product.EsquemaRenovacion,
    tipo: product.Tipo,
    idERP: product.IdERP
}))

console.log(source);

export default class Searchbar extends Component {
    state = initialState

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.nombre })


        alert(result.nombre)
    }
 

    
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.nombre)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid >
                <Grid.Column >
                    <Search
                        fluid
                        input={{ fluid: true }}
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        value={value}
                        {...this.props}
                        resultRenderer={resultRenderer}
                        noResultsMessage={'Sin Resultados'}
                    />
                </Grid.Column>
                {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column> */}
            </Grid>
        )
    }
}