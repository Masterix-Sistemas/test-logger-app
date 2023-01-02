import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  function getData() {
    return fetch('http://localhost:8080/api/testCase')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="App">
      {data.map((testCase: any) => (
        <p>{testCase.testTitle}</p>
      ))}
    </div>
  );
}

export default App;
