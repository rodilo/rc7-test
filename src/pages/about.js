import React from "react";
import { navigate } from "@reach/router";

export default () => {
  navigate("/blog");
  return (
    <div>
      <p>React Static is a progressive static site generator for React.</p>
    </div>
  );
};
