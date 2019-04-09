import React, { Component } from 'react';
import Formulario from './FormularioContent'
import { obtenerdiferenciaañio, calcularMarca, obtenerPlan } from './../baseinfo';


class App extends Component {

  state ={
    result:'',
    datos:{},
    isHidden: true,
    isError:false
  }

  cotizarPlan = (datos)=>{
    
    const {marca, plan, año} =datos;
    
    
    const autos ={ marca:marca.name,plan:plan.name,año:año};
    
    let preciobase = 2000;

    let difaño = obtenerdiferenciaañio(año);
    
    preciobase -=((difaño *3)*preciobase)/100;
    
    preciobase = calcularMarca(marca.id) * preciobase;
    
    let inncremento = obtenerPlan(plan);

    preciobase = parseFloat ( inncremento * preciobase).toFixed(2);
    console.log(preciobase)
    if(isNaN(preciobase)){
      
      this.setState({isError: true,isHidden: true})
    }else{
      this.setState({result:preciobase,datos:autos,isHidden: false,isError: false})
    }
    
    
    
  }


  render() {
    return (
      <div className="content">         
         <header className="top">
               <h1>Cotizador de Seguro de Autos</h1>
          </header>
          <div className="formulario">
            <Formulario 
              cotizarPlan={this.cotizarPlan}
            />
            {!this.state.isHidden &&
              <div>
                <div className="resumen " >
                  <h2>Resumen de Cotización</h2>
                  <li>Marca:  <span> {this.state.datos.marca}</span></li>
                  <li>Plan:   <span> {this.state.datos.plan}</span></li>
                  <li>Año del Auto:  <span>  {this.state.datos.año}</span></li>
                </div>
            
                <div className="resumen">
                  <span>TOTAL: $ {this.state.result}</span>                    
                </div>
              </div>
            }
            {this.state.isError &&
            <div className="resumen " >
                  <h2>Se requiere que seleccione los tres parametros para poder calcular</h2>                  
                </div>
            }
          </div>
        
      </div>
    );
  }
}

export default App;
