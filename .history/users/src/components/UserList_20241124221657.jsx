import React from 'react'

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <p>{user.email}</p>
            </tr>
        )
    }
}


export default UserList
