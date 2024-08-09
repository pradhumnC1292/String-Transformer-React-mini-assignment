import React, { useState } from "react";
import "./StringTransformer.css";

const StringTransformer = () => {
  const [inputString, setInputString] = useState("");
  const [output, setOutput] = useState({
    lower: "",
    upper: "",
    camel: "",
    pascal: "",
    snake: "",
    kebab: "",
    trim: "",
  });

  const transformString = (type) => {
    let transformedString = "";
    switch (type) {
      case "lower":
        transformedString = inputString.toLowerCase();
        break;
      case "upper":
        transformedString = inputString.toUpperCase();
        break;
      case "camel":
        transformedString = toCamelCase(inputString);
        break;
      case "pascal":
        transformedString = toPascalCase(inputString);
        break;
      case "snake":
        transformedString = inputString.split(" ").join("_").toLowerCase();
        break;
      case "kebab":
        transformedString = inputString.split(" ").join("-").toLowerCase();
        break;
      case "trim":
        transformedString = inputString.replace(/\s+/g, "");
        break;
      default:
        break;
    }
    setOutput((prevOutput) => ({ ...prevOutput, [type]: transformedString }));
  };

  const toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  const toPascalCase = (str) => {
    return str.replace(/(\w)(\w*)/g, function (_, firstChar, rest) {
      return firstChar.toUpperCase() + rest.toLowerCase();
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <div className="transformations">
        <div className="transformation">
          <button onClick={() => transformString("lower")}>Lower Case</button>
          <p id="lowerCase" className="output">
            {output.lower}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("upper")}>Upper Case</button>
          <p id="upperCase" className="output">
            {output.upper}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("camel")}>Camel Case</button>
          <p id="camelCase" className="output">
            {output.camel}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("pascal")}>Pascal Case</button>
          <p id="pascalCase" className="output">
            {output.pascal}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("snake")}>Snake Case</button>
          <p id="snakeCase" className="output">
            {output.snake}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("kebab")}>Kebab Case</button>
          <p id="kebabCase" className="output">
            {output.kebab}
          </p>
        </div>
        <div className="transformation">
          <button onClick={() => transformString("trim")}>Trim</button>
          <p id="trimCase" className="output">
            {output.trim}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StringTransformer;
