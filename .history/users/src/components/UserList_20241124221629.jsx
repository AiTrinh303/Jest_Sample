import React from 'react'

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <div key={index}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    }
}


export default UserList
