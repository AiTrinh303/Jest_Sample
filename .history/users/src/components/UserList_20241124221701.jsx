import React from 'react'

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }
}


export default UserList
