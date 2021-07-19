import React from "react";
import { render } from "@testing-library/react";

// SUT: Subject under testing (Objeto del testeo)
import CityInfo from "./CityInfo";

test("CityInfo render", async () => {
  // AAA
  // Arrange (Organizamos todo para ejecutar el test)

  // Act (Ejecutamos el test)
  const city = "Almería"
  const country = "España"

  // Render: renderiza el componente y devuelve una serie de funciones
  // En este caso utilizamos "findAllByRole" para "consultar a nuestro componente"
  // Vamos a analizar su estado en el "Asset"

  const { findAllByRole } = render(
    <CityInfo city={"Almería"} country={"España"}></CityInfo>
  );

  // Assert (Comprobamos resultado)
  // findAllByRole nos va a buscar (en este caso) todos los componentes que sean "heading" => H1, H2, H3...
  const componentProps = await findAllByRole("heading");
  
  // ¿Cuando el test va a ser correcto?
  //Definición:
  // Cuando el primer elemento (heading) se encuentre la ciudad "Almería" y cuando en el segundo elemento se encuentre el país "España"

  expect(componentProps[0]).toHaveTextContent(city)
  expect(componentProps[1]).toHaveTextContent(country)

  //Si se cumplen estas condiciones parará el test
});
