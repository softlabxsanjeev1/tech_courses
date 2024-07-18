import React from 'react'
import './account.css'
import { MdDashboard } from "react-icons/md";


function Account() {
    return (
        <div>
            <div className='profile'>
                <h2>My Profile</h2>
                <div className='profile-info'>
                    <p>
                        <strong>Name- Sanjeev Kumar</strong>
                    </p>
                    <p>
                        <strong>Email - Sanjeev@gmail.com</strong>
                    </p>

                    <button className='common-btn'>
                        <MdDashboard />
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account