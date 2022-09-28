import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Preview from '../pages/Preview.js'
import Registerform from '../pages/Registerform';
import App from '../pages/App' 
import Layout from '../layout/Layout.js'
import Dashboard from '../pages/Dashboard'
import Guidelines from '../pages/Guidelines.js'
import displayGuidelineHOC from '../pages/displayGuidelineHOC';
import displayPreviewHOC from '../pages/displayPreviewHOC'

function AppRoutes(props) {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Registerform}></Route>
                <Layout>
                    <Route path="/published" component={Preview}></Route>
                    <Route path="/App" component={App}></Route>
                    <Route path="/Dashboard" component={Dashboard}></Route>
                    <Route path="/Guidelines" component={Guidelines}></Route>
                    <Route path="/HOCGuidelines" component={displayGuidelineHOC}></Route>
                    <Route path="/HOCPreview" component={displayPreviewHOC}></Route>
                    
            </Layout>
        </Switch>
    </BrowserRouter>
    );
}
export default AppRoutes;