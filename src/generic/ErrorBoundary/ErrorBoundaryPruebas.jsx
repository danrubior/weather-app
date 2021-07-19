import React, { Component } from 'react'

class ErrorBoundary extends Component {

   constructor(props) {
      super(props)

      //Inicializamos la propiedad activo
      this.state = {
         activo: false
      }

   }

   //FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE
   //Cuando se ha montado el componente, similar a onCreate
   componentDidMount(){
      console.log("El componente se ha montado")
   }

   componentDidUpdate(prevProps, prevState){
      console.log("Estado previo: ", prevState.activo)
      console.log("Estado nuevo: ", this.state.activo)
      console.log("El componente se ha actualizado")
   }

   componentWillUnmount() {
      console.log("El componente se ha desmontado")
   }


   render() {
      return (
         <div>
            <button onClick={this.onClickHandler}>Activar</button>
            <h1>
               ErrorBoundary {this.props.saludo}
               {
                  this.estaActivo()
               }

            </h1>
         </div>
      )
   }

   estaActivo = () => {
      return this.state.activo ? "Activo" : "No activo"
   }

   onClickHandler = () => {
      //Modificamos la propiedad activo
      this.setState({ activo: true })
   }
}

export default ErrorBoundary