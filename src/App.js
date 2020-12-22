import { useState } from 'react';
import Routes from './Routes';

function App() {
  const [list, setList] = useState([
    { name: 'Paula', email: 'paula@algo.com', password: '1234' },
    { name: 'Teste', email: 'teste@algo.com', password: '1234' },
  ]);

  function handleInclude(newUser) {
    const newUsers = [...list, newUser];

    setList(newUsers);
    console.log(newUsers);
  }

  return <Routes list={list} include={handleInclude} />;
}

export default App;
