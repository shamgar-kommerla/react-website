import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />          
            {/* <Route path="/home" component={Home}/> */}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>     
    );
  }
  
}  

export default App;

