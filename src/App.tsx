import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

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
      <h1>Quadidade de testes criados: {data.length}</h1>
      {data.map((testCase: any) => (
        <ReactMarkdown
          children={testCase.testTitle}
          remarkPlugins={[remarkBreaks]}
        />
      ))}
    </div>
  );
}

export default App;
