import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Init state
  state = { passwords: [] }

  // fetch passwords after mount
  componentDidMount() {
    this.getPasswords()
  }

  getPasswords = () => {
    // get passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }))
      .then(() => {
        console.log(this.state.passwords)
      })

  }

  render() {
    const { passwords } = this.state

    return (
      <div className="App">
        {/*render passwords if they are available */}
        { passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
