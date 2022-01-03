import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://private-anon-6a5359a326-pizzaapp.apiary-mock.com/restaurants/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div clasName="App">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                Name: {item.name} | Address1: {item.address1}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
