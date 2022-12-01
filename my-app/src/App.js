import './App.css';
import { useEffect, useState } from 'react';

const getUsers = () => {
  return fetch('http://localhost:8000/users')
    .then((response) => response.json())
    .then((data) => data.users);
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);
  return (
    <div className='App'>
      <h1>Users</h1>
      <ul>{users.length > 0 && users.map((user, i) => <li key={'user-'[i]}>{user.name}</li>)}</ul>
    </div>
  );
}

export default App;
