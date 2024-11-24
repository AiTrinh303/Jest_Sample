import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...user])
  }
  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
