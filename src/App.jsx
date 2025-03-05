import { useState } from "react";
import logo from "./assets/logotesla.png";
import "./App.css";
import Selector from "./components/Selector";
import SelectorAdd from "./components/SelectorAdd";
import SelectorSub from "./components/SelectorSub";
import Price from "./components/Price";

function App() {
  const [price, setPrice] = useState(90700);
  const [selecMotor, setSelecMotor] = useState(true);
  const [selecColor, setSelecColor] = useState(true);

  return (
    <>
      <header>
        <img src={logo} alt="Logo Tesla" />
        <h1>configuration</h1>
      </header>
      <main>
        <div className="selection">
          <section>
            <h2>Motorisation</h2>
            <article>
              <Selector
                selec={selecMotor}
                text={"Grande autonomie"}
                cost={90700}
                setSelec={true}
                funcSelec={setSelecMotor}
                setPrice={setPrice}
                classActive={"config-selec"}
                classDefault={"config"}
              />
              <Selector
                selec={selecMotor}
                text={"Performance"}
                cost={106700}
                setSelec={false}
                funcSelec={setSelecMotor}
                setPrice={setPrice}
                classActive={"config"}
                classDefault={"config-selec"}
              />
            </article>
          </section>
          <section>
            <h2>Couleur</h2>
            <article>
              <SelectorSub
                selec={selecColor}
                text={"Blanc Nacré Multicouches"}
                cost={0}
                setSelec={true}
                funcSelec={setSelecColor}
                setPrice={setPrice}
                price={price}
                classActive={"config-selec"}
                classDefault={"config"}
              />
              <SelectorAdd
                selec={selecColor}
                text={"Noir uni"}
                cost={1000}
                setSelec={false}
                funcSelec={setSelecColor}
                setPrice={setPrice}
                price={price}
                classActive={"config"}
                classDefault={"config-selec"}
              />
            </article>
          </section>
        </div>
        <Price price={price} />
      </main>
      <footer>
        <p>
          Made wit <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Yann Treuiller-Schlachter</span>
        </p>
      </footer>
    </>
  );
}

export default App;
