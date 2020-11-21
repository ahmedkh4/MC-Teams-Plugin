import  * as React from 'react'
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import{ Label, themes } from '@fluentui/react-northstar';
import axios from 'axios' ;



export interface IformProps {

}

export  interface IformState  extends ITeamsBaseComponentState {
    
    name:String ;
    
   
    
}



export class FormDel extends TeamsBaseComponent< IformProps  , IformState   >{

  public  state : IformState ={
        name:"" ,
       
        theme: themes.teamsDark
    

    }

  
 

   private handleChange = (e) => {
        this.setState({
            ...this.state ,
            [e.target.id]:e.target.value
        })

    }

    private confirmSubmit = ( e) => {
        e.preventDefault() ;
        const str = "are you sure to delete "+this.state.name +" project" ;
       alert(str);
       
        
    }

   private handleSubmit= (e) => {
       e.preventDefault();
     
     try {
     //   axios.post('api/File/create')
        //.then(() =>console.log("yeeey")) ;
         
     } catch (error) {
            console.log('react error' ,error)
         
     }
    
    }


   
   public render() {
        return (
            <div className="text-center">

                <form onSubmit={() => {this.confirmSubmit} }>

                    <div className="row mb-3">
                    <label htmlFor="name" className="col m2"> Project Name</label>
                    <input type="text" id="name" onChange={this. handleChange}  className="col m9"/> {"  "} </div>



                    <button className="btn btn-danger" onClick={this.confirmSubmit}>Submit</button>


                </form>
                
            </div>
        )
    }
}

export default FormDel
