import React, { Component } from 'react';

class FormularioContent extends Component{
    constructor(props,context){
        super(props);
        this.handleChangeMarca = this.handleChangeMarca.bind(this);
        this.handleChangeaño = this.handleChangeaño.bind(this);
        this.handleChangePlan = this.handleChangePlan.bind(this);
    }

    marcasventa=[ 
        {id:"0",name:"Seleccione..."},
        {id:"1",name:"Americano"},
        {id:"2",name:"Europeo"},
        {id:"3",name:"Asiatico"}];
    añofab=[
        {id:"0",name:"Seleccione..."},
        {id:"1",name:"2019"},
        {id:"2",name:"2018"},
        {id:"3",name:"2017"},
        {id:"4",name:"2016"},
        {id:"5",name:"2015"},
        {id:"6",name:"2014"},
        {id:"7",name:"2013"},
        {id:"8",name:"2012"},
        {id:"9",name:"2011"},
        {id:"10",name:"2010"},
        {id:"11",name:"2001"},
        {id:"12",name:"2002"},
        {id:"13",name:"2003"},
        {id:"14",name:"2004"},
        {id:"15",name:"2005"},
        {id:"16",name:"2006"},
        {id:"17",name:"2007"},
        {id:"18",name:"2008"}];
    // se puede realizar con un forech
    planventa=[
        {id:"0",name:"Seleccione..."},
        {id:"1",name:"Basico"},
        {id:"2",name:"Completo"}];
    
    parametros={
        marca:{id:0,name:""},
        añofab:{id:0,name:""},
        planventa:{id:0,name:""}
    }
    
    cotizarPlan = (e)=>{        
        e.preventDefault();
        this.props.cotizarPlan({marca:this.parametros.marca,
                                plan:this.parametros.planventa,
                                año:this.parametros.añofab.name});
   
    }

    handleChangeMarca(event) {    
        
        var index = event.nativeEvent.target.selectedIndex;
        
        this.parametros.marca={id:event.target.value,name:event.nativeEvent.target[index].text}
    }
    handleChangeaño(event) {
        var index = event.nativeEvent.target.selectedIndex;
        
        this.parametros.añofab={id:event.target.value,name:event.nativeEvent.target[index].text}
    }
    handleChangePlan(event) {
        var index = event.nativeEvent.target.selectedIndex;
        
        this.parametros.planventa={id:event.target.value,name:event.nativeEvent.target[index].text}
    }
    
    render(){
        return(
            <form onSubmit={this.cotizarPlan}>
                <div className="campo custom-select">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef} onChange={this.handleChangeMarca} >
                        {this.marcasventa.map(item=>(
                            <option key={item.id} value={item.id} >{item.name}</option>            
                        ))}
                    </select>
                </div>
                <div className="campo" >
                <label>Año</label>
                <select name="year" ref={this.yearRef} onChange={this.handleChangeaño}>
                        {this.añofab.map(item=>(
                            <option  key={item.id}value={item.id}>{item.name}</option>            
                        ))} 
                </select>
                </div>
                <div className="campo">
                    <label>Plan</label>
                    <select name="planv" ref={this.planv} onChange={this.handleChangePlan}>
                        {this.planventa.map(item=>(
                            <option key={item.id} value={item.id}>{item.name}</option>            
                        ))}
                    </select>
                </div>                                
                <button type="submit"  className="button" ><span>Cotizar </span></button>
            </form>
        );
    }
}
export default FormularioContent;