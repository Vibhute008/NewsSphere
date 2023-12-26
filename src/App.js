import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { Component } from 'react'

export default class App extends Component {
  apiKey = "82dbf9424ee74a2ab9455a7c0e32a3e9"
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/home' element={<News key='general' pageSize={12} country='in' apiKey={this.apiKey} category='general' />} />
            <Route path='/business' element={<News key='business' pageSize={12} country='in' apiKey={this.apiKey} category='business' />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country='in' apiKey={this.apiKey} category='entertainment' />} />
            <Route path='/health' element={<News key='health' pageSize={12} country='in' apiKey={this.apiKey} category='Health' />} />
            <Route path='/science' element={<News key='science' pageSize={12} country='in' apiKey={this.apiKey} category='science' />} />
            <Route path='/sports' element={<News key='sports' pageSize={12} country='in' apiKey={this.apiKey} category='sports' />} />
            <Route path='/technology' element={<News key='technology' pageSize={12} country='in' apiKey={this.apiKey} category='technology' />} />
            <Route path="*" element={<img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?t=st=1703173792~exp=1703174392~hmac=606b8aebc79a38e0f7e528ebb16eb9dbe49e86449f55cd7ecb9e944dc4067413" alt="pageNotFounds" />} />
          </Routes>
          <Footer />

        </Router>
      </div>
    )
  }
}
