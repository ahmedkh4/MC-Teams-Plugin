import  * as React from 'react'
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import{ Label, themes } from '@fluentui/react-northstar';
import axios from 'axios' ;


export interface IformProps {

}

export  interface IformState  extends ITeamsBaseComponentState {
    
    name:String ;
    type:String ; 
    person:String[];
   
    
}



export class Form extends TeamsBaseComponent< IformProps  , IformState   >{

  public  state : IformState ={
        name:"" ,
        type:"" ,
        person:[] ,
        theme: themes.teamsDark
    

    }

   private handleChange = (e) => {
        this.setState({
            ...this.state ,
            [e.target.id]:e.target.value
        })

    }

    private confirmSubmit = (e , state) => {
        const str = "are you sure to create "+this.state.name +" project  , type :"+this.state.type+" and supervisors :"+this.state.person ;
       alert('hello');
        alert( () => {
            return (
                <div>
                    <p>{str}</p>
                    <button onClick={this.handleSubmit}></button>
                </div>
            )
        }) ;

    }

   private handleSubmit= (e) => {
       e.preventDefault();
     console.log(this.state);
     try {
     //   axios.post('api/File/create')
        //.then(() =>console.log("yeeey")) ;
         
     } catch (error) {
            console.log('react error' ,error)
         
     }
    
    }

   public render() {
        return (
            <div className="center">

                <form onSubmit={() => {this.confirmSubmit} }>

                    <div className="row">
                    <label htmlFor="name" className="col m3"> Project Name</label>
                    <input type="text" id="name" onChange={this. handleChange}  className="col m9"/> {"  "} </div>

                    {/* <div className="row">
                    <label htmlFor="type" className="col m3">Type</label>
                    <input type="text" id="111" onChange={this. handleChange}  className="col m6"/> {"  "} </div> <br/> */}

                    <div className="row">
                        <h6>Type : </h6>
                    <label htmlFor="file1">file 1</label>    
                    <input type="radio" name="file1" id="type" value="file1" className="col m3" onClick={this. handleChange} /> 

                    <label htmlFor="file2">file 2</label>    
                    <input type="radio" name="file1" id="type" value="file2" className="col m3" onClick={this. handleChange}/> 

                    <label htmlFor="file3">file 3</label>    
                    <input type="radio" name="file1" id="type" value="file3" className="col m3" onClick={this. handleChange} /> 
                    </div>
                    
                   

                    <div className="row">
                    <label htmlFor="person" className="col m2">Managers</label>
                    <input type="text" id="person" onChange={this. handleChange}  className="col m10"/> {"  "} </div>

                    <button className="btn blue darken-1" onClick={this.handleSubmit}>Submit</button>


                </form>
                
            </div>
        )
    }
}

export default Form
