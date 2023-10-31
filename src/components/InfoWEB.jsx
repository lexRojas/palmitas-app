import React from "react";
import { Card } from "primereact/card";

import "../css/estilos.css";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import cuadro1 from "../images/cuadro1.png";
import logo from "../images/OIP.png"

function InfoWEB() {
  return (
    <div className="pantalla_gris">
      <div className="flex mb-5">
        <div className="mr-3">
            <Image src={logo} width="100px" />
        </div>
        <div>
          <p className="text-4xl font-bold">Diseño WEB</p>
          <p className="text-l ">Sección Técnica Nocturna</p>
        </div>
      </div>
      <div className="flex p-2 justfy-content-center max-w-full lg:w-7">
        <Card>
          <p className=" text-lg font-bold "> Competencia general:</p>
          <p>
            Desarrollar aplicaciones web en entornos distribuidos según los
            requerimientos y la normativa vigente, con ética y profesionalismo,
            coordinando con el personal cualificado la solución de problemas en
            un ambiente de sana convivencia.
          </p>

          <Divider />
          <p className=" text-lg font-bold ">
            {" "}
            Actividades pedagógicas por utilizar como parte del proceso de
            aprendizaje del estudiante:
          </p>
          <p className="font-bold">Práctica profesional:</p>
          <p>
            Es una actividad de índole curricular que proporciona al estudiante
            la oportunidad de la experiencia práctica, mediante su vinculación a
            la empresa pública y/o privada que le permita aplicar los
            conocimientos atinentes a su especialidad.
          </p>
          <p className="font-bold">Pasantía: </p>
          <p>
            Es la actividad de índole curricular, que forma parte del proceso de
            enseñanza y aprendizaje que se realiza en instituciones públicas y/o
            privadas, cuyo objetivo es lograr que el estudiante vivencie la
            realidad inherente a su especialidad y facilite, de esta manera, la
            incorporación del estudiante al sector productivo. Dicha actividad
            es de carácter obligatorio.
          </p>
          <p className="font-bold">Gira: </p>
          <p>
            Viaje a distintas instituciones públicas y/o privadas, cuyo
            propósito es que el o la estudiante refuerce el proceso de
            aprendizaje en condiciones reales.{" "}
          </p>

          <p className="font-bold">Visita: </p>
          <p>
            Ir a una institución pública y/o privada con el propósito de que el
            estudiante refuerce el proceso de aprendizaje en condiciones reales
            (MEP, 2006, p 2-3).
          </p>

          <Divider />

          <p className=" text-lg font-bold "> Evaluación </p>

          <p className="font-bold">Trabajo cotidiano. </p>

          <p>
            Consiste en las actividades educativas que realiza el estudiantado
            con la guía y orientación de la persona docente según el
            planeamiento didáctico y el programa de estudios. Valor 45%{" "}
          </p>

          <p className="font-bold">Tareas. </p>
          <p>
            Consisten en trabajos cortos que se asignan al estudiantado con el
            propósito de reforzar aprendizajes esperados, de acuerdo con la
            información recopilada durante el trabajo cotidiano. Valor 10%{" "}
          </p>

          <p className="font-bold">Pruebas. </p>

          <p>
            Son un instrumento de medición cuyo propósito es que el estudiantado
            demuestre la adquisición de habilidades cognitivas, psicomotoras o
            lingüísticas. Valor 20%{" "}
          </p>

          <p className="font-bold">Proyecto.</p>
          <p>
            Es un proceso de construcción de aprendizajes, guiado y orientado
            por la persona docente; parte de la identificación de contextos del
            interés de la persona estudiante. Valor 15%{" "}
          </p>

          <p className="font-bold"> Asistencia. </p>
          <p>
            La asistencia se define como la presencia de la persona estudiante
            en las lecciones y en todas aquellas otras actividades escolares a
            las que fuere convocado. (MEP, 2018, Art. 25-30) Valor 10%{" "}
          </p>

          <Divider />
          <p className="text-lg font-bold"> Subáreas o materias a llevar </p>
          <Image src={cuadro1} width="500px" preview />
        </Card>
      </div>
    </div>
  );
}

export default InfoWEB;
