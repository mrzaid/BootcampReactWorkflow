import React, { Component } from 'react';
class  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[
                { id:0,name: "admin", pass: "admin"},
                { id:1,name: "irfan", pass:"irfan"},
                { id:2,name:"aamir",pass:"aamir"}
              ],
              isAuth:false,
              currentUser:null, 
         }
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default ;