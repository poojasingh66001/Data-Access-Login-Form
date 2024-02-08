import React from 'react'
import "./login.css";
import { useState } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {clickk} from "../action/index"

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);

    

    const btn_reset=()=>
    {
        setPassword('');
        setEmail('');
        setLoggedIn(!loggedIn)
    }
 
    const mystate= useSelector(state => state.Fetchingdata)

     const dispatch = useDispatch();
    //    dispatch(clickk())

    const Check=(e)=>{
        e.preventDefault();
        console.log("check",email,password)
        if (password.length<=6 &&(/^[a-z0-9]/) ){
            
            alert("please fill password correctly")
        }
         if(email==="Employee_One@gmail.com" && password==='Employee123'){
             console.log(loggedIn,"loggedIn");
            setLoggedIn(!loggedIn)
        
           console.log("after check ", mystate);
           dispatch(clickk())
         }  
        
    }

    return (
        <div className="container">
            <form action="" onSubmit={Check}>
                    <div>
                        <label htmlFor="email">Username</label>
                        <input type="email" name="email" id="email" placeholder="username" 
                        value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" value={password}
                        onChange={(e)=> setPassword(e.target.value)} ></input>
                    </div>
                    
                    <input className="btn-submit" type="submit" value="Submit" />

                     <button  className="reset"  onClick={btn_reset}>Reset</button>
            </form>
            {
                loggedIn && mystate.map((item) => {
                    return ( 
                        
                        <table>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>PHONE NO.</th>
                        </tr>
                           <td className="test">{item.id}</td>
                           <td className="test">{item.name}</td>
                            <td className="test">{item.age}</td>
                            <td className="test">{item.gender}</td>
                            <td className="test">{item.email}</td>
                            <td className="test">{item.phoneNo}</td>
                        </table>
                        
                    )
                })
            }
        </div>
    )
}
export default Login;