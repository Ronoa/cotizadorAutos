import React, { Component } from 'react';
import Featch from './Featch';


class App extends Component {
// constructor(props) {
//     super(props)
//     this.state ={
//         idUsuario:''
//     }
// }
    

// componentDidMount(){
//     this.handlerfetchfunction();
// }

// handlerfetchfunction(){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response)=>{
//        console.log("res1",response) 
//        return response.json()
//     })
//     .then((response2)=>{
//         console.log("res2",response2)
//     })
// }

// handlerChange(event){
// const {value} =event.target;
//     this.setState({
//         idUsuario:value
//     })
// }
// render(){
    
//     return(
//         <div className="App">
//             <h1>algo</h1>
//             <input 
//                 name="idUsuario"
//                 value={this.state.idUsuario}
//                 onChange={this.handlerChange}
//             /> 
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>User Id</th>
//                             <th>tittle</th>
//                             <th>status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


render(){
    return(
        <Featch />
    )
}
}



export default App;