import { useEffect, useState } from "react"
import "./UserInfo.module.css"

export default function UserInfo({userId}){


    const [user,setUser] = useState(null)

    useEffect(()=> {
        let getData = async () => {
            let response = await fetch(`https://dummyjson.com/users/${userId}`);
            let data = await response.json();
            setUser(data)
        }

        if(userId){
            getData()
        }
    },[userId])

    if(!user){
        return <p>Loading info....</p>
    }

    return(
        <section>
            <img src={user.image} alt="" />
            <div>
                <h3>{user.username}</h3>
                <p>{user.email} | {user.address?.city}</p>
            </div>
            
        </section>)
}