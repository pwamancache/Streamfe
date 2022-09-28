import LineGraph from '../component/Linechart/Line.js'
import React from 'react';
import Cookies from "js-cookie";
function Dashboard(props) {
    const isAuthenticated = !!Cookies.get("token");
    console.log('authen' + isAuthenticated)
    if (!isAuthenticated) {
      props.history.push("/");
    }  
    return (
        <div>
            <LineGraph/>
        </div>
    );
}

export default Dashboard;