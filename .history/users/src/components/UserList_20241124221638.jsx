import React from 'react'

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </tr>
        )
    }
}


export default UserList
