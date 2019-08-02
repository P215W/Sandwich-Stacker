import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <SandwichBuilder />
      </Layout>
    </div>
  );
}

export default App;
