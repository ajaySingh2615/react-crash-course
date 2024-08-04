import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = React.useContext(UserContext)

  if (!user) return <div>Please Login</div>

  return (
    <div>
      Welcome, {user.username} and your password is {user.password}. Please verify it!
    </div>
  )
}

export default Profile
