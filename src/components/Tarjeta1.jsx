import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function Tarjeta1() {
  return (
    <div className="card flex justify-content-center w-3">
      <Accordion activeIndex={0}>
        <AccordionTab header="Perfil Profesional">
          <p className="m-0">
            Al terminar esta especialidad, el o la persona graduada desarrollará
            una serie de habilidades que le permitirán desarrollar sitios y
            aplicaciones WEB en entornos distribuidos, diseñar sitios web de
            acuerdo a las normas más modernas y vigentes del momento. Estos
            conocimientos servirán como base sólida para luego desempeñarse como
            desarrollador fullstack, frontend o backend, ampliando las
            posibilidades de obtener un mejor empleo de cara a los
            requerimientos de las empresas actuales, o bien, si deseara
            emprender por su propia cuenta.
          </p>
        </AccordionTab>
        <AccordionTab header="Beneficios que ofrecemos">
          <lu>
            <li> Horario: NOCTURNO </li>
            <li> Duración: 3 años </li>
            <li> Laboratorios de Cómputo </li>
            <li>
              {" "}
              Becas:
              <ul>
                <li>Transporte</li>
                <li>Alimentación</li>
              </ul>
            </li>
          </lu>
        </AccordionTab>
        <AccordionTab header="Fechas importantes">
          <p className="font-bold text-xl  mb-1">Fecha de Matricula:</p>
          <p className="m-0 text-l">
            Inicia el 4 de diciembre hasta el 8 de diciembre del 2023.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
