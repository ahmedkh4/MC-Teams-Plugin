import  * as React from 'react'
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import{ Label, themes } from "@fluentui/react-northstar";
import axios from "axios" ;
import Select from "react-select";


export interface IformProps {

}

export  interface IformState  extends ITeamsBaseComponentState {
    
    name:String ;
    type:String ; 
    person:{label , value}[];
   
    
}

const options = [
    { value :"Ahmed"  , label:"Ahmed"} , 
    { value :"Hamza"  , label:"Hamza"} , 
    { value :"Ayoub"  , label:"Ayoub"} , 
    { value :"Wassim"  , label:"Wassim"} , 

]

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

    private handleSelect = (selected) => {
        this.setState({
            ...this.state , 
            person:selected
        })
    }

    private confirmSubmit = (e) => { 
         e.preventDefault() ;
        console.log(this.state.person) ;
        const str = "are you sure to create "+this.state.name +" project  , type :"+this.state.type+" and supervisors :"+this.state.person.map(obj => obj.value) ;
        console.log(this.state);
        alert(str);
        this.handleSubmit(e) ;
    
    }

   private handleSubmit= (e) => {
       e.preventDefault();
     console.log(this.state);
     try {
       axios.post('http://localhost:3007/api/File/create', {fname:this.state.name})
        .then(() =>console.log("yeeey")) ;
         
     } catch (error) {
            console.log("react error" ,error)
         
     }
    
    }


   
   public render() {
        return (
            <div className="text-center">

                <form onSubmit={() => {this.confirmSubmit} }>

                    <div className="row mb-3">
                    <label htmlFor="name" className="col m2"> Project Name</label>
                    <input type="text" id="name" onChange={this. handleChange}  className="col m9"/> {"  "} </div>

                    {/* <div className="row">
                    <label htmlFor="type" className="col m3">Type</label>
                    <input type="text" id="111" onChange={this. handleChange}  className="col m6"/> {"  "} </div> <br/> */}

                    <div className="row mb-3">
                        <h6 className='mr-2'>Type : </h6>
                    <div className="col m3"> 
                    <label htmlFor="file1">file 1</label>    
                    <input type="radio" name="file1" id="type" value="file1" className="col m3" onClick={this. handleChange} /> 
                    </div>   

                    <div className="col m3">
                    <label htmlFor="file2">file 2</label>    
                    <input type="radio" name="file1" id="type" value="file2" className="col m3" onClick={this. handleChange}/> 
                    </div>

                    <div className="col m3">
                    <label htmlFor="file3">file 3</label>    
                    <input type="radio" name="file1" id="type" value="file3" className="col m3" onClick={this. handleChange} /> 
                    </div>

                    </div>   
                    
                    <div className='row mb-3'>
                    <Select
                        defaultValue={options[0]}
                        isMulti
                        options={options}
                        className="basic-multi-select col m10"
                        classNamePrefix="select"
                        onChange={this.handleSelect}
                        
                        
                        
                    />
                    </div>


                    {/* <div className="row mb-3">
                    <label htmlFor="person" className="col m2">Managers</label>
                    <input type="text" id="person" onChange={this. handleChange}  className="col m10"/> {"  "} </div> */}

                    <button className="btn btn-danger" onClick={this.confirmSubmit}>Submit</button>


                </form>
                
            </div>
        )
    }
}

export default Form
