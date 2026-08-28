import { useEffect, useState } from "react"

export default function UserInfo({user}){


    const [users,setUser] = useState()

    useEffect(()=> {
        let getData = async () => {
            let response = await fetch(`https://dummyjson.com/users/${user.id}`);
            let data = await response.json();
            setUser(data.user)
        }

        getData();
    },[])
    
    return(
        <section>
            <img src={user.image} alt="" />
            <h3>{user.username}</h3>
            <p>{user.email} | {user.adress.city}</p>
        </section>)
}