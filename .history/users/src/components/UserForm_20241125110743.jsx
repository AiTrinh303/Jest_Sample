import {useState} from 'react'
import './UserForm.css'


const UserForm = ({addUser}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email)
        addUser({name, email});
    }

  return (
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Name</label>
            <input value={name} onChange = {e => setName(e.target.value)}/>
        </div> 
        <div>
            <label>Email</label>
            <input value={email} onChange = {e => setEmail(e.target.value)}/>
        </div>    
        <button>Add User</button>    
    </form>
  )
}

export default UserForm
import {useState} from 'react'
import './UserForm.css'


const UserForm = ({addUser}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email)
        addUser({name, email});
    }

  return (
    <form onSubmit = {handleSubmit}>
        <div>
            <label>Name</label>
            <input value={name} onChange = {e => setName(e.target.value)}/>
        </div> 
        <div>
            <label>Email</label>
            <input value={email} onChange = {e => setEmail(e.target.value)}/>
        </div>    
        <button>Add User</button>    
    </form>
  )
}

export default UserForm
