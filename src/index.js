import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/header'

import './styles/styles.css';

import JSON from './db.json';
import Life from './Components/lifecycle'

import NewsList from './Components/new_list.jsx'
import Footer from './Components/footer';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      unmount: true,
      active: false,
      news: JSON,
      filtered:[],
      footerText: 'By Eddy Mouity'

    }
  }

  getkeywords = (e) =>{
    
    let keywords = e.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1
    });
    this.setState({
      filtered
    })
  }

  changeColor= ()=>{
    this.setState({
        active: this.state.active  ? false : true
    })
}


  render() {
    const {footerText, filtered, news, active, unmount} = this.state;

    return (
      <div>
        <Header
        active={active}
        changeColor={this.changeColor}
          keyword={this.getkeywords}
        />

        <NewsList news={filtered.length === 0 ? news : filtered}>

        <br />
        <h1>Enjoy reading your reading!</h1>

        </NewsList>

        {unmount ? <Life /> : null }
        <button onClick={()=>this.setState({unmount: !this.state.unmount})}>Action</button>

       

    {/* Footer must always be at the buttom */}
        <Footer footerText={footerText}/>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
