import React,{Component} from 'react';
import Conditional from './Conditional';












class  Lifecycle extends Component {
    constructor(props){
        super()
        this.state={ 
                isLoading:true
        } 
    }
   componentDidMount(){  
       setTimeout(()=>{
           this.setState({ isLoading:false

           }) 
       },3000)
   }
    render(){
 
  return (
    <div >

    
        <Conditional isLoading={this.state.isLoading} />
    
    

    </div> 
  );
}}

export default Lifecycle;
