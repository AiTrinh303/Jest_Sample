import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user])
  }
  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
