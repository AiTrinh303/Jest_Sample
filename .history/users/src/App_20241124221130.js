import { useState } from 'react';
import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <>
      <UserForm addUser={addUser}/>
      <hr/>
      <UserList user=
    </>
  );
}

export default App;
