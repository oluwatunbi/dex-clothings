import React from 'react';
import Homepage from './Components/Pages/Homepage/homepage';
import {Switch,Route} from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <h1> Home page</h1>
    </div>
    )

}


function App() {
  return (
    <div>
      <switch>
        < Route exact path ='/' component= {Homepage} />
        < Route  path ='/hats' component= {Homepage} />
      </switch>
    </div>

  );
}

export default App;
