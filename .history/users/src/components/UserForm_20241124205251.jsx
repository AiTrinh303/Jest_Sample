import React from 'react'

const UserForm = () => {
  return (
    <form>
        <div>
            <label>Name</label>
            <input type="text" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" />
        </div>        
    </form>
  )
}

export default UserForm