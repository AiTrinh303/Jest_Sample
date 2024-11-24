import React from 'react'

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <>{user.name}</>
                <p>{user.email}</p>
            </tr>
        )
    }
}


export default UserList
