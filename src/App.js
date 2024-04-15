import Layout from './LayoutEx';
import Header from './Layout/Header';
import { HomePage, Contact, Product, About, Cart } from './Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout1 from './Layout';
import React, { useState } from 'react';
import { AppProvider } from './Context';
import Login from './Page/Login';
import Signin from './Page/SignIn';
import Login_admin from './Page/Admin/Login_admin';
import Product_admin from './Page/Admin/Product_admin';
import Update from './Page/Admin/Update_admin';

function App() {
  return( 
    <>
    <AppProvider>
    <BrowserRouter>
          <Layout1>
            <Routes>
            <Route path='/' element={<Login_admin></Login_admin>}></Route>
            <Route path='/products/:id' element={<Update></Update>}></Route>
            <Route path='/admin' element={<Product_admin></Product_admin>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
              <Route path='/Contact' element={<Contact></Contact>}></Route>
              <Route path='/product' element={<Product></Product>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
            </Routes>
          </Layout1>
      </BrowserRouter>
    </AppProvider>

    </>
  )
}

export default App;
