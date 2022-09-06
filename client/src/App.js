import React, { useState, useEffect } from 'react'
import { BrowserRouter ,Switch ,Route , Link} from "react-router-dom";
import axios from 'axios';
import './App.css';
import AddNewPage from './pages/AddNewPage'
import HomePage from './pages/HomePage'
import UpdatePage from './pages/UpdatePage'
import DetailsPage from './pages/DetailsPage'


const App = () =>{




    return (
      <>
        <BrowserRouter>
        <Switch>

          <Route path="/new">
            <AddNewPage/>
          </Route>

          <Route path="/edit/:id">
            <UpdatePage/>
          </Route>

          <Route path="/pets/:id">
            <DetailsPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;
