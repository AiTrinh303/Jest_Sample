import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <>
      <UserForm addUser=/>
    </>
  );
}

export default App;
