import {useState} from 'react'

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  return (
    <form>
        <div>
            <label>Name</label>
            <input value={name} onChange = {e => setName(e.target.value)}/>
        </div> 
        <div>
            <label>Email</label>
            <input type="email" />
        </div>    
        <button>Add User</button>    
    </form>
  )
}

export default UserForm