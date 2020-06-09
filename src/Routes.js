import React, { Component } from 'react';
import {BrowserRouter,Route,switch} from 'react-router-dom'
class Router  extends Component {
    state = {  }
    render() { 
<BrowserRouter>
<div>
    <switch>
<Route path="/" component={Login} />



    </switch>
</div>
</BrowserRouter>        
    }
}
 
export default Router ;
