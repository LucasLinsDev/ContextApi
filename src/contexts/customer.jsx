import { createContext, useState } from "react";
//criar um contexto para que nossa aplicação trabalhe e tudo que está envolvido nesse contexto a nossa aplicação está 
export const CustomerContext =createContext();

export const CustomerProvider=({children})=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");



  const handleSubmit=({name,email})=>{
    console.log('dados App',{name,email})
  
    setName(name);
    setEmail(email);
  }


  return(
    <CustomerContext.Provider value={{name,email,submit:handleSubmit}}> 
    {children}
    </CustomerContext.Provider>
  )
}