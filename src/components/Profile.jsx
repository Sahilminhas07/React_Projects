import React,{useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div>User not Fount Pls login</div>
  return <div>welcome {user.username}</div>
}

export default Profile