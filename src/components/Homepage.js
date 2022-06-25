import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/homepage.css";

const Homepage = (props) => {
  const [text, setText] = useState("Initial value");
  // We created a text variable with a initial state , ie initial value enter teh text
  // For changing the value of text variable:
  // text = "33" // This is wrong and invalid in react
  // This is why we use useState to change the states
  // setText("Enter the text");
  const handlesUppercase = () => {
    // console.log("Uppercase is clicked" + text)
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text convert to Uppercase", "success");
  };
  const handlesLowerCase = () => {
    // console.log("Lowercase is clicked")
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text convert to Lowercase", "success");
  };
  function handlesOnChange(e) {
    setText(e.target.value);
  }
  let [styleObj, setStyleObj] = useState({
    background: "white",
    color: "blue",
    fontSize: "1.2rem",
  });
  const handlesBold = () => {
    setStyleObj({
      fontSize: "1.2rem",
      color: "blue",
      fontWeight: "bold",
    });
    props.showAlert("Text weight changed", "success");
  };
  const handlesClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handlesRemoveExtraSpace = () => {
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed ", "success");
  };
  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="mb-3">
          <h1 className="text-center">{props.heading}</h1>
          <textarea
            className={`form-control ${
              props.mode === "light" ? "lighthome" : "darkhome"
            }`}
            id="myBox"
            rows="12"
            value={text}
            onChange={handlesOnChange}
            style={styleObj}
          ></textarea>
        </div>
        <div id="buttonsDiv">
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlesUppercase}>
            Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlesLowerCase}>
            Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlesBold}>
            Bold
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlesClear}>
            Clear
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" || props.mode === "dark"
                ? "danger"
                : props.mode === "red"
                ? "secondary"
                : "primary"
            } mx-2`}
            disabled={text.length===0}
            onClick={handlesRemoveExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <p>
          {text.split(" ").filter(e=>e!=="").length} Words and {text.length} Characters
        </p>

        {/* Average time to read one word is 0.008 seconds so */}
        <p
          className={`mb-5 text-${props.mode === "light" ? "muted" : "light"}`}
        >
          {" "}
          Estimate Read Time:{" "}
          {text.split(" ").filter(e=>e!=="").length * 0.008} min
        </p>
      </div>
      <div className="container hideOnMobile " style={{ visibility: "hidden" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis
        sit ipsum minima fugit dolore iste consequatur incidunt, expedita
        impedit cumque animi soluta explicabo amet neque eaque similique non a
        obcaecati repellendus cum, repudiandae, natus voluptatum. Sint quis amet
        praesentium, odio quae assumenda perspiciatis veniam nemo cum porro
        maiores doloribus animi eum ex modi dolor ratione ullam in unde facere.
        Quia, corrupti odit rem error eveniet ut magnam incidunt accusamus
        perferendis asperiores? Perferendis cum ipsam tempore alias
        exercitationem debitis natus cupiditate nobis suscipit mollitia dolorem
        deserunt atque fugit velit odio qui, necessitatibus quibusdam recusandae
        tempora ut explicabo adipisci fuga aliquid? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Facilis, dolorem. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Reiciendis, ipsa. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Reiciendis, ipsa. Lorem ipsum
        dolor sit amet consec Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reiciendis labore sit
      </div>
    </>
  );
};

Homepage.propTypes = {
  heading: PropTypes.string,
};

export default Homepage;

// Excercise: Make any one custom function and attact to a button
/* 
props.mode === 'red'?'redhome':props.mode==='green'?'greenhome':
-- textarea ki classes for redmode and greenmode

buttons ki classes --
${(props.mode==='light'||props.mode==='dark')?'primary':props.mode==='red'?'warning':'danger'} mx-2`}
*/
