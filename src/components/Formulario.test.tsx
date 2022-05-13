import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  //Renderizar o componente
  render(<Formulario />);
  //Busca o input pelo placeholder
  const input = screen.getByPlaceholderText("Insira o nome dos participantes");
  //Busca o botao
  const botao = screen.getByRole("button");
  //Espera que o input esteja no documento
  expect(input).toBeInTheDocument();
  //Espera que o botao esteja desabilitado
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  //Renderizar o componente
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  //Busca o input pelo placeholder
  const input = screen.getByPlaceholderText("Insira o nome dos participantes");
  //Busca o botao
  const botao = screen.getByRole("button");
  //inserir valor no input
  fireEvent.change(input, {
    target: {
      value: "Ana Clara"
    },
  });

  fireEvent.click(botao);
  expect(input).toHaveFocus()
  expect(input).toHaveValue("")
});

test("nomes duplicados não podem ser adicionados na lista", () => {
  //Renderizar o componente
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  //Busca o input pelo placeholder
  const input = screen.getByPlaceholderText("Insira o nome dos participantes");
  //Busca o botao
  const botao = screen.getByRole("button");
  //inserir valor no input
  fireEvent.change(input, {
    target: {
      value: "Ana Clara",
    },
  });
  fireEvent.click(botao);

  fireEvent.change(input, {
    target: {
      value: "Ana Clara",
    },
  });
  fireEvent.click(botao);

 const mensagemDeErro = screen.getByRole("alert")

 expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
});
