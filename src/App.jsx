import { useState } from "react";
import logo from "./assets/logotesla.png";
import "./App.css";
import Selector from "./components/Selector";
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
                classActive={"config-selec"}
                classDefault={"config"}
              />
              <Selector
                selec={selecMotor}
                text={"Performance"}
                cost={106700}
                setSelec={false}
                funcSelec={setSelecMotor}
                classActive={"config"}
                classDefault={"config-selec"}
              />
            </article>
          </section>
          <section>
            <h2>Couleur</h2>
            <article>
              <div
                className={selecColor ? "config-selec" : "config"}
                onClick={() => {
                  setPrice(price - 1000);
                  setSelecColor(true);
                }}
              >
                <span>Blanc Nacré Multicouches</span>
                <p>0 €</p>
              </div>
              <div
                className={selecColor ? "config" : "config-selec"}
                onClick={() => {
                  setPrice(price + 1000);
                  setSelecColor(false);
                }}
              >
                <span>Noir uni</span>
                <p>1 000 €</p>
              </div>
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
