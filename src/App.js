import logo from "./images/OIP.png";
import { PrimeReactProvider } from "primereact/api";
import { Image } from "primereact/image";

import { Button } from "primereact/button";

function App() {
  return (
    <PrimeReactProvider>
      <div className="flex flex-row p-5 justify-content-center ">
        <h1>Bienvenidos a nuestra institución</h1>
      </div>
      <div className="flex flex-row p-2 justify-content-center ">
        <div className="flex flex-column justify-content-center">
          <Image src={logo} alt="Image" width="150" />
        </div>
      </div>

      <div className="flex flex-row p-5 justify-content-center ">
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5EpaCSEzXUdcUac3t5x9ryO4sJJoFb39vjwcDSgICzwzFsA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              label="Inscribirme"
            
            
            />
          </a>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
