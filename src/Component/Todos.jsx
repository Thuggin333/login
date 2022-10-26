import React from 'react'
import withUser from './HOC_component'

function Todos() {
  return (
    <div>Todos</div>
  )
}

export default withUser(Todos)