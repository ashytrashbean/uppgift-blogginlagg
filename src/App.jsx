import { useState } from 'react'
import './App.css'
import GetPostsData from './componenets/Posts/GetData'
import UserInfo from './componenets/UserInfo/UserInfo'

function App() {
    return (
      <>
        <UserInfo userId={121}/>
        <GetPostsData/>
      </>
    )
}

export default App
