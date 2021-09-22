import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  /*constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' };
  }*/

  state = {lat: null, errorMessage:''};

  //called right after the component is rendered on the screen
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => {
          // we called setstate!!!!
          this.setState({ lat: position.coords.latitude });
        },
        err => {
          this.setState({ errorMessage: err.message });
        }
      );
  }

  //called right after the component gets updated or state/props is updated
  componentDidUpdate() {

  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
      
      return <Spinner message="Please accept locations request"/>;
  }

  // React says we have to define render!!
  render() {
      return (
        <div>
            {this.renderContent()}
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));