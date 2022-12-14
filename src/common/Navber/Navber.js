import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../UserContext/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('accessToken');
             })
            .then(err => console.log(err))
    }

    const MenuItem = <>

        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/aboute'>About</Link></li> */}
        <li><Link to='/appointment'>Appointment</Link></li>
        {user?.uid ? <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li onClick={handleLogOut}><Link>Sign Out</Link></li>
        </>
            : <li><Link to='/login'>Login</Link></li>}
    </>

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {MenuItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Doctor Chamber</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {MenuItem}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navber;