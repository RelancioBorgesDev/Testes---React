import React from 'react'

export default function Formulario() {
  return (
      <form>
        <input type="text" placeholder="Insira o nome dos participantes" />
        <button disabled={true}>Adicionar</button>
      </form>
  )
}
