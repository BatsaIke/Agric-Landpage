import React from 'react';
import Landpage from './Landingpage';



function Conditional(props) {
  if(props.isLoading === true){
      return(
            // returns the logo on the startpage
          <div style={{textAlign:'center', marginTop:'100px', }}>
          <h3 >Loading... please wait</h3>
          <img style={ {width:'20%', marginTop:'20px', alignSelf:'center'}} src ="/Images/logo.JPG"  /> 
          </div>
      )
  } else{
  
 
return (
    // returning the landing page
    <div><Landpage /></div>
)
}}

export default Conditional;
