import React from 'react'

export default props =>
  <div>
    <h1>Família {props.sobreNome}</h1>
    {React.Children.map(props.children, componenteFilho => {
      return React.cloneElement(componenteFilho, { ...props })
    })}

    {/* {props.children} */}
  </div>