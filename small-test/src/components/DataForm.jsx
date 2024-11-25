import React, { useState } from 'react'
import './DataForm.css'

const DataForm = () => {
    const [email, setEmail] = useState("test@test.com"); 
    
  return (
    <form>
      <h3>Enter Data</h3>
      
      <div data-testid='image wrapper'>
        <img src="data.jpg" alt="data" />
      </div>

      <label htmlFor="email">Email</label>
      <input 
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="color">Color</label>
      <input 
        id='color'
        placeholder='Red'
      />

      <button title='Click me'>Submit</button>
    </form>
  )
}

export default DataForm
