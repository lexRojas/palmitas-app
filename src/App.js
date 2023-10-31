import logo from "./images/OIP.png";
import qr from "./images/masinfo.jpg"


import { PrimeReactProvider } from "primereact/api";
import { Image } from "primereact/image";

import { Button } from "primereact/button";
import Tarjeta1 from "./components/Tarjeta1";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";

function App() {
  return (
    <PrimeReactProvider>
      <div className="flex flex-row p-5 justify-content-center text-center">
        <h1>Bienvenidos a nuestra institución</h1>
      </div>
      <div className="flex flex-row p-2 justify-content-center ">
        <div className="flex flex-column justify-content-center mb-5">
          <Image src={logo} alt="Image" width="150" />
        </div>
      </div>
      <div className="inline justify-content-center ">
        <div className="block text-xl font-bold text-center ">
          Especialidad de Desarrollo WEB
        </div>

        <div className="block text-l text-blue-400 font-bold text-center m-2 ">
          STN - Sección Técnica Nocturna
        </div>
      </div>

      <div className="flex flex-row p-5 justify-content-center ">
        <div className="m-1">
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5EpaCSEzXUdcUac3t5x9ryO4sJJoFb39vjwcDSgICzwzFsA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          > */}

          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf5EpaCSEzXUdcUac3t5x9ryO4sJJoFb39vjwcDSgICzwzFsA/viewform">
            <Button label="ESTOY INTERESAD@" className="primary-100" />
          </Link>
          {/* </a> */}
        </div>
        <div className="m-1">
          <Link to="/info">
            <Button label="MAS INFO" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-content-center">
        <Tarjeta1 />
      </div>
      <div className="block ">
        <Divider/>
        <Image className="flex justify-content-center" src={qr} width="150px"/>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
