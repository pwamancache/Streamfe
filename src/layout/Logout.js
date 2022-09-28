import React from 'react';
import Cookies from "js-cookie";
function Logout() {
    const handleLogout = ()=>
    {
      Cookies.remove("token")
      window.location.href = '/'
    }
    return (
        <div>
            <button className="btn btn-secondary" onClick={()=>handleLogout()}>Logout</button>
        </div>
    );
}

export default Logout;