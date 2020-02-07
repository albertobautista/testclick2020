import React, { Component } from 'react';
import { Grid, Dropdown, Form, Table, Image, Input, Button, Label, Icon, Search } from 'semantic-ui-react';
import clients from '../Catalog/data/clients';
import Sections from './Sections'
import validator from 'validator';
import Searchbar from '../Header/SearchBar'
import './styles.css'

class Header extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }
  constructor() {
    super();
    this.state = {
      inge: '',
      name: '',
      email: '',
      submittedName: '',
      submittedEmail: '',
      error: false,
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { name, email, clientValue } = this.state
    console.log(validator.isEmail(email));
    if (validator.isEmail(email)) {
      this.setState({ submittedName: name, submittedEmail: email, error: false, ing: clientValue })
    } else {
      this.setState({ error: true })
      console.log('No es un correo válido');
    }

  }


  onChange = (e, data) => {
    this.setState({ inge: data.value })
    console.log('e', data.value);
    console.log('value');
  }
  //this.setState({ condition: value, conditionError: '', arrayValues, allowAdd, value: '' });

  render() {
    // const { name, email, inge, submittedName, submittedEmail, error, clientValue, ing } = this.state
    return (
      <div>
        <Grid style={{ backgroundColor: '#FFFFFF', marginBottom: '50px' }}>
          <Grid.Row textAlign="center" verticalAlign="middle" paddingBottom="10px" className='boxShadow' style={{ lineHeight: '2.4285em' }}>
            <Grid.Column
              largeScreen={3}>
              <Image src='https://clicksuscribe.compusoluciones.com/images/LogoSVG.svg' />
            </Grid.Column>
            <Grid.Column
              largeScreen={13}>
              <Grid>
                <Grid.Row style={{ backgroundColor: '#00549F',height:65 }} verticalAlign="middle">
                <Grid.Column
                  textAlign='right'
                    largeScreen={10}
                  >
                  </Grid.Column>
                  <Grid.Column
                  textAlign='right'
                    largeScreen={6}
                  >
                    <Sections/>
                </Grid.Column>
                  {/* <Grid.Column
                    largeScreen={8}
                  >
                    B
              </Grid.Column> */}
                </Grid.Row >
                <Grid.Row textAlign="left" style={{ backgroundColor: '#4a7bab' }} verticalAlign="middle">
                  <Grid.Column
                    largeScreen={14}
                    
                    
                  >
                    {/* <Input icon='search' fluid /> */}
                    <Searchbar />
                  </Grid.Column>
                  <Grid.Column
                  textAlign='left'
                    largeScreen={2}
                  >
                    <Button
                    primary fluid>Buscar</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>





            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>

      // <Grid >
      //   <Grid.Row>
      //     <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
      //       <Form onSubmit={this.handleSubmit}>
      //         <Dropdown
      //           placeholder='Primero'
      //           value={clientValue}
      //           options={clients}
      //           onChange={this.onChange}
      //           fluid
      //         />
      //         <br></br>
      //         {inge === 'ab' ?
      //           <Dropdown
      //             placeholder='Segundo'
      //             options={clients}
      //             onChange={this.onChange}
      //             fluid
      //           />
      //           : null}

      //         <Form.Group>
      //           <Form.Input
      //             placeholder='Nombre'
      //             name='name'
      //             value={name}
      //             onChange={this.handleChange}
      //             required={true}

      //           />
      //           <Form.Input
      //             placeholder='Correo'
      //             name='email'
      //             value={email}
      //             onChange={this.handleChange}
      //             error={error}
      //           />
      //           <Form.Button content='Submit' />
      //         </Form.Group>
      //       </Form>
      //       <strong>onChange:</strong>
      //       <pre>{JSON.stringify({ name, email,inge }, null, 2)}</pre>
      //       <strong>onSubmit:</strong>
      //       <pre>{JSON.stringify({ submittedName, submittedEmail,inge }, null, 2)}</pre>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>


    )
  }
}

export default Header;