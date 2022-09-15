import React from 'react'
import ContactSidebar from './ContactSidebar'


const Sidebar = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-white font-bold text-2xl'>
          ¿Quien soy yo?
        </h3>
        <p className='text-white'>
          Hola ✌. Me llamo Omar Mendoza, y soy un joven muy apasionado por la tecnología, principalmente en el desarrollo de aplicaciones y servicios web. Me puedo adaptar a los cambios que se presenten, y al mismo tiempo estoy muy abierto al aprendizaje continuo, acepto grandes retos y desafios que me permitan mejorar cada día. Actualmente estoy desarrollando mis habilidades de forma autodidacta.
        </p>
      </div>

      <ContactSidebar />
      
    </div>
  )
}

export default Sidebar