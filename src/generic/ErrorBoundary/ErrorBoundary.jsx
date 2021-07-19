import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {

   constructor(props) {
      super(props)

      //Inicializamos la propiedad activo
      this.state = {
         hasError: false
      }

   }

   //Se invoca automaticamente cuando hay un error y se le pasa a setState un objeto con la propiedad hasError
   static getDerivedStateFromError(error){
      return {hasError: true}
   }

   //Cuando ha habido un error se ejecuta automaticamente
   componentDidCatch(error, errorInfo){
      console.log("ErrorInfo: ", errorInfo);
   }

   render() {
      return (
         this.state.hasError ?
            <h1>Hubo un error</h1>
            :
            this.props.children
      )
   }
}

export default ErrorBoundary