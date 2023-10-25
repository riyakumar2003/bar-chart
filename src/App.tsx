import React from 'react';
import BarChart from './components/BarChart';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <BarChart data={[45, 85, 32, 45, 50, 60]} labels={['Jan', 'Feb', 'Mar', 'Apr', 'Sep', 'Dec',]} />
    </div>
  );
}

export default App;
