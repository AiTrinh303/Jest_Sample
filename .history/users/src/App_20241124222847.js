import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <>
      <UserForm addUser={addUser}/>
      <hr/>
      <h2>U</h2>
      <UserList users ={users} />
    </>
  );
}

export default App;
