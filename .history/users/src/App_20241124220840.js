import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([])
  }
  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
