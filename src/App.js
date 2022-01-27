import './App.scss';
import React  from 'react';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Bibliography from './Bibliography/Bibliography'
import Gallery from './Gallery/Gallery';
import Grid from '@material-ui/core/Grid';
import Events from './Events/Events';
import 'react-calendar/dist/Calendar.css';
// import  logo from 'logo.svg';
// import img1 from 'principalmg.jpg'
class App extends React.Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Grid item md={12}>
          <header className="header">
              <Main className={"principal"}/>
              <Navbar />
              {/* <logo/> */}
              {/* <img/> */}
              <Bibliography/>
              <Gallery/>
              <Events/>
          </header>
        </Grid>
      </div>
    );
  }
}

export default App;
