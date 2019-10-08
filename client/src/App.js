import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home_page from './component/Home_Page'
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Switch>
       
            <Route exact path='/' render={(props)=><Home_page Router_props={props} />}/>
        </Switch>
      </div>
    );
  }

}

export default App;
