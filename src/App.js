import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component{

state={
  progress:0
}

setprogress=(progress)=>{
  this.setState({
    progress:progress
  })
}

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <div className='container'>
            <Routes>
              <Route path="/" element={<News setprogress={this.setprogress} key="general" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="general" />} />
              <Route path="/business" element={<News setprogress={this.setprogress} key="business" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="business" />} />
              <Route path="/sports" element={<News setprogress={this.setprogress} key="sports" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="sports" />} />
              <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="entertainment" />} />
              <Route path="/general" element={<News setprogress={this.setprogress} key="general" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="general" />} />
              <Route path="/health" element={<News setprogress={this.setprogress} key="health" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="health" />} />
              <Route path="/science" element={<News setprogress={this.setprogress} key="science" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="science" />} />
              <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" pagesize={10} title="NewsMonkey - Top Headlines" country="us" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
