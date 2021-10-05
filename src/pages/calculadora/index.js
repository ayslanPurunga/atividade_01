import { useState } from "react";
import "./index.css";

function Calculadora({ a, b }) {
  const [values, setValues] = useState({ a, b });
  const resultado = values.a + values.b;

  function onChange(ev) {
    setValues({
      ...values,
      [ev.target.name]: Number(ev.target.value),
    });
  }

  return (
    <div className="PagesCalculadora--div">
      <div className="PagesCalculadora--div--input">
        <input
          type="text"
          name="a"
          placeholder="a"
          value={values.a}
          onChange={onChange}
        />
        <input
          id="b"
          type="text"
          name="b"
          placeholder="b"
          value={values.b}
          onChange={onChange}
        />
      </div>
      <div className="PagesCalculadora--div--resultado">
        <p>
          {" "}
          A soma de {values.a} + {values.b} = {resultado}{" "}
        </p>
      </div>
    </div>
  );
}
export default function PagesCalculadora() {
  return (
    <div className="PagesCalculadora">
      <Calculadora a={1} b={1} />
    </div>
  );
}
