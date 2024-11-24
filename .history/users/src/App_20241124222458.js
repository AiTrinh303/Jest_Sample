import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <>
      <UserForm addUser={addUser}/>
      <hr/>
      
      <UserList users ={users} />
    </>
  );
}

export default App;
