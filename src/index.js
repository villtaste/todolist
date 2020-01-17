import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetConut(){
    //clearInterval(this.interval);
    this.setState(state => ({
      seconds:0
    }));
  }

  renderBtn(){
    return (
      <button
      onClick={() => this.resetConut()}
      >
        ボタン
      </button>
    )
  }

  render() {
    return (
      <div>
        <div>
        Seconds: {this.state.seconds}
        </div>
        <div className="btn">
          {this.renderBtn()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);