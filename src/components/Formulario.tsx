import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../hooks/useAdicionarParticipante'
import { useMensagemDeErro } from '../hooks/useMensagemDeErro'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()
  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

 
  return (
      <form onSubmit={adicionarParticipante}>
        <input type="text" ref={inputRef} onChange={evento => setNome(evento.target.value)} placeholder="Insira o nome dos participantes" />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p>{mensagemDeErro}</p>}
      </form>
  )
}
