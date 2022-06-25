import React from "react";

const Footer = (props) => {
  let styleObj = {
    // position: "fixed",
    // width: "100vw",
    bottom: 0,
  };
  return (
    <>
      <footer
        className={`footer mt-auto py-3 bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}
        style={styleObj}
      >
        <div className="container text-center">
          <p>Made with Love ♥ by Balveer Singh</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
