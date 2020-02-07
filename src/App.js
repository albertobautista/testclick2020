import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Components/Header/'
import Catalog from '../src/Components/Catalog';
import CarouselComp from '../src/Components/Carousel'
import NotFound from './Components/NotFound'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/carousel" component={CarouselComp}></Route>
            <Route exact path="/catalogo" component={Catalog}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>

      // <div>
      //   <Header></Header>
      //   {/* <Catalog></Catalog> */}
      //   <CarouselComp></CarouselComp>
      // </div>
    )
  }
}

export default App;
