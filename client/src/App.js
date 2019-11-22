import React from 'react';
import logo from './logo.svg';
import burger from './burger.svg';
import './App.css';
import Analysis from './Analysis';
import { PacmanLoader } from 'react-spinners';
import instagramLogo from './instagram-logo.svg';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      uploaded: false
    };
  }

  openFileUpload = () => {
    document.getElementById('myFileInput').click();
    this.setBusy();
  }

  setBusy = () => {
    this.setState({
      busy: true,
    }); 
    setTimeout(this.setUploaded, 3000);
  }

  setUploaded = () => {
    this.setState({
      busy: false,
      uploaded: true
    })
  }

  render() {
    const { uploaded, busy } = this.state;
    if (!uploaded) {
      return (<>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="title">
              ECO EAT
            </p>
            <p className="Show-text"> Take a photo of what you eat today!</p>
            <input id="myFileInput" align="center" type="file" accept="image/*;capture=camera" hidden />
            {!busy && <img src={burger} className="Camera-icon" alt="Icons made by Freepik @ www.flaticon.com" onClick={this.openFileUpload}/>}
            {busy && <PacmanLoader />}
          </header>
        </div>
        <img src={instagramLogo} className="inslogo" alt="logo"/>
        </>
      );} else {
        return <Analysis />;
    }
  }
}

export default App;
