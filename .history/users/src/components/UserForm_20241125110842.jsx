import {useState} from 'react'
import './UserForm.css'

const UserForm2 = ({addUser}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({name, email});
    }

  return (
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Name</label>
            <input value={name} onChange = {e => setName(e.target.value)}/>
        </div> 
        <div>
            <label htmlFor='email'>Email</label>
            <input id value={email} onChange = {e => setEmail(e.target.value)}/>
        </div>    
        <button>Add User</button>    
    </form>
  )
}

export default UserForm2
