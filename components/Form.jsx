import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, mobileupdate, nameupdate, withdraw } from '../pages/actions';
function Form() {
    let dispatch=useDispatch();
    const [amount,setAmount]=useState("")
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")

    const balance = useSelector((state) => state.balance);
    // const fullname = useSelector((state) => state.fullname);
    return (
        <div>
            <input type='number' placeholder='enter amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
            <button onClick={()=>{dispatch(deposit(parseInt(amount))),setAmount("")}}>Deposit</button>
            <button onClick={()=>{dispatch(withdraw(parseInt(amount))),setAmount("")}}>WithDraw</button>
            {/* <button onClick={()=>{dispatch({'type':'withdraw',payload:parseInt(amount)}),setAmount("")}}>WithDraw</button> */}

            <input type='text' placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={()=>{dispatch(nameupdate(name)),setName("")}}>Update Name</button>

            <input type='number' placeholder='enter mobile' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
            <button onClick={()=>{dispatch(mobileupdate(mobile)),setMobile("")}}>Update Mobile</button>
        </div>
    )
}

export default Form
