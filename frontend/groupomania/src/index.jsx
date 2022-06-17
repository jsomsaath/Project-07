import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import Post from './components/Post'
import Header from './components/Header'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <React.Fragment>
      <Header />
    </React.Fragment>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/post' element={<Post />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)