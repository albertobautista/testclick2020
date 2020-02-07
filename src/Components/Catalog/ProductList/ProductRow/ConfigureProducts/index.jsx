import React, { Component } from 'react';
import { Grid, Header, Input,Button, Dropdown } from 'semantic-ui-react';
import clients from '../../../data/clients'
import './styles.css'

class ConfigureProducts extends Component {
    
    render() {
        return (
            <Grid>
                <Grid.Row className="softBlue">
                    <Grid.Column width={16}>
                        <Header as='h3'>Configura tus productos</Header>
                        <Header as='h5'><strong>*¿Cuantos quieres?</strong> Disponible de 1 a 250</Header>
                        <Input
                            action={{
                                color: 'green',
                                icon: 'cart',
                            }}
                            actionPosition='left'
                            placeholder='Número de licencias'
                            type='number'
                            fluid

                        />
                        <Header as='h5'><strong>*¿Para quiénes son?</strong>  (Añadir cliente usuario final)</Header>
                        <Grid.Row>
                    <Grid.Column width={6}>

                        <Dropdown 
                         search selection
                        options={clients}
                        placeholder='Selecciona un cliente'
                        fluid
                        
                         />
                        </Grid.Column>
                        </Grid.Row>
                       
                        <Header as='h5' textAlign='right'>Total: $0.00</Header>
                        <br/><br/>
                        <Button 
                        content='Agregar al carrito'
                        color='green' 
                        floated='right'/>
                        <br/><br/><br/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default ConfigureProducts;