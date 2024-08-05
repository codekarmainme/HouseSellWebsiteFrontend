import React,{createContext,useState} from "react";
const Authcontext =createContext();
const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);

    const login=(email,username,password)=>{
      setTimeout(()=>setUser(username),1000)
    }

    const logout=()=>{
        setUser(null)
    }
    return (
        <Authcontext.Provider value={{user,login,logout}}>
        {children}

        </Authcontext.Provider>
    )
}

export {AuthProvider,Authcontext};