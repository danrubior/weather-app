import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
   //Hooks
   const myRefDiv = useRef(null)
   const [vanta, setVanta] = useState(0) //vanta va a ser inicializado en "0"

   //En la primera renderizacion "myRefDiv.current" es igual a nulo, el valor inicial
   console.log("myRefDiv.current: ", myRefDiv.current)

   //"useEffect" se ejecuta después de renderizar el componente
   useEffect(() => {
      console.log("myRefDiv.current (en useEffect): ", myRefDiv.current)

      // Solo pasa una vez por dentro del if
      if (!vanta) {
         //Inicializamos vanta
         setVanta(Clouds({
            THREE,
            el: myRefDiv.current
         })) //vanta != 0, es diferente de falso

         //Activa el efecto "clouds" sobre "myRefDiv"

         console.log("Establezco vanta a un valor diferente de 0")
      }

      //SANEAMIENTO: Al salir de la pantalla debemos deterner el efecto y des-asociar todos los recursos (div + vanta effect)

      return () => {
         //Aquí se realiza la tarea de destruir los recursos tomados por "vanta"
         if (vanta) {
            vanta.destroy()
            console.log("Recursos liberados")
         }
      }
   }, [vanta]) // Con esto me aseguro que siga funcionando bien si tuviera mas variable use

   return (
      <div className="full" ref={myRefDiv}>
         {children}
      </div>
   )
}

WelcomeScreen.propTypes = {
   children: PropTypes.node
}

export default WelcomeScreen
