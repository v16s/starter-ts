import React from 'react';
import logo from './logo.svg';
import { Query } from 'react-apollo'
import { gql } from "apollo-boost";
import './App.css';

const HELLO = gql`
{
  hello
}
`

const App: React.FC = () => {
  return (
    <Query query={HELLO}>
      {({ loading, data }: any) => {
        if (loading) return 'Loading...'
        return <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      }}
    </Query>
  );
}

export default App;
