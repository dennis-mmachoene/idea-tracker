import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";

const UserContext = createContext()

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider (props) {
const [user, setUser] = useState('')

async function login(email, password) {
    const loggedIn = await account.createEmailPasswordSession(email,password);
    setUser(loggedIn)
    window.location.replace('/')
}

async function logout(){
    await account.deleteSession('current')
    setUser('')
}

async function register(email, password){
    await account.create(ID.unique(), email, password);
    await login(email, password)
}

async function init() {
    try{
        const loggedIn = await account.get();
        setUser(loggedIn)
    }catch(err){
        setUser('')
        console.log(err)
    }
}

useEffect(()=>{
    init()
},[])

return (
    <UserContext.Provider value={{current: user, login, register, logout}}>
        {props.children}
    </UserContext.Provider>
)
}