import React from 'react'
import { useSelector } from 'react-redux'
function Account() {
    let data=useSelector(
        (state)=>{
            return state;
        }
    )
    return (
        <>
            <div className="container">
                <h2>Account Details</h2>
                <table className='table table-bordered w-50'>
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>User Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.balance}</td>
                            <td>{data.fullname}</td>
                            <td>{data.mobile}</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </>
    )
}

export default Account
