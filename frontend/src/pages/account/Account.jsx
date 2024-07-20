import React from 'react'
import './account.css'
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
// import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';


function Account({ user }) {
    // const [setIsAuth, setUser] = UserData()

    const logoutHandler = () => {
        localStorage.clear()
        // setUser([])
        // setIsAuth(false)
        toast.success("User Logged Out Succesfully")
    }

    return (
        <div>
            {user && (
                <div className='profile'>
                    <h2>My Profile</h2>
                    <div className='profile-info'>
                        <p>
                            <strong>Name- {user.name}</strong>
                        </p>
                        <p>
                            <strong>Email - {user.email}</strong>
                        </p>
                        <button className='common-btn'>
                            <MdDashboard size={24} style={{ marginRight: 10 }} />
                            Dashboard
                        </button>
                        <button onClick={logoutHandler} className='common-btn'
                            style={{ backgroundColor: "red", color: "white", marginLeft: 30 }}>
                            <IoMdLogOut size={24} style={{ marginRight: 10 }} />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Account