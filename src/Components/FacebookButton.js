import React from "react";

import FacebookIcon from "./FacebookIcon";

const FacebookButton = () => (
  <div
    style={{
      width: "51px",
      height: "51px",
      background: "#FFFFFF",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
      marginLeft: "-20px"
    }}
  >
    <FacebookIcon style={{ fill: "#ffffff" }} />
  </div>
);

export default FacebookButton;