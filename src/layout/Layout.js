import React from 'react';
import Navigationbar from './Navigation'
function Layout(props) {
    return (
        <div>
            <header><Navigationbar/></header>
            <section>{props.children}</section>
            <footer></footer>
            
        </div>
    );
}
export default Layout;