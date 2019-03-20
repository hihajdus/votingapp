import React, { Component } from 'react';
import './App.css';

const List = [
  {
    id: 1,
    name: 'witbir',
    votes: 0
  },
  {
    id: 2,
    name: 'stout',
    votes: 0
  },
  {
    id: 3,
    name: 'hefe-waizen',
    votes: 0
  },
  {
    id: 4,
    name: 'bestbiter',
    votes: 0
  },
  {
    id: 5,
    name: 'IPA',
    votes: 0
  },
  {
    id: 6,
    name: 'pils',
    votes: 0
  }
]

class App extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    this.setState({ beer: List});
  }

  handleEvent = beerId => {
    const updateList = this.state.beer.map(beer => {
      if (beer.id === beerId) {
        return Object.assign({}, beer, {
          votes: beer.votes + 1
        });
      } else {
        return beer;
      }
    });

    this.setState({
      beer: updateList
    });
  };

  render() {
    return this.state.beer.map(beer => (
      <BestBeers
        name={beer.name}
        key={beer.id}
        id={beer.id}
        votes={beer.votes}
        onVote={this.handleEvent}
      />
    ));
  }
}

class BestBeers extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
      <div className="App">
        <p>
          {this.props.name}
          <button onClick={this.handleClick}>+</button>
          {this.props.votes}
        </p>
      </div>
    );
  }
}

export default App;
