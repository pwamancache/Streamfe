import React, { useEffect } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Preview from '../pages/Preview.js'
import Registerform from '../pages/Registerform';
import App from '../pages/App' 
import Layout1 from '../layout/Layout1.js'
import Layout from '../layout/Layout.js'
import Dashboard from '../pages/Dashboard'
import Guidelines from '../pages/Guidelines.js'
import displayGuidelineHOC from '../pages/displayGuidelineHOC';
import displayPreviewHOC from '../pages/displayPreviewHOC'
import {useDispatch,useSelector} from 'react-redux'

function AppRoutes(props) {
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state)
    console.log("selector " + selector)
    useEffect(()=>{
        dispatch({type:'FetchLayout'})
        //selector = useSelector((state) =>  (state === 'Layout'))
    },[])
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Registerform}></Route>
          
           
            {
            selector.length>0?
            (selector[0]==="Layout"?
                <Layout>
                    <Route path="/published" component={Preview}></Route>
                    <Route path="/App" component={App}></Route>
                    <Route path="/Dashboard" component={Dashboard}></Route>
                    <Route path="/Guidelines" component={Guidelines}></Route>
                    <Route path="/HOCGuidelines" component={displayGuidelineHOC}></Route>
                    <Route path="/HOCPreview" component={displayPreviewHOC}></Route> 
               </Layout>
               :
               
               
               <Layout1>
                <Route path="/published" component={Preview}></Route>
                <Route path="/App" component={App}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
                <Route path="/Guidelines" component={Guidelines}></Route>
                <Route path="/HOCGuidelines" component={displayGuidelineHOC}></Route>
                <Route path="/HOCPreview" component={displayPreviewHOC}></Route> 
              </Layout1>
               
               
               
               
               
               )
               :"No layouts"
    }

              
              
           


        </Switch>
    </BrowserRouter>
    );
}
export default AppRoutes;