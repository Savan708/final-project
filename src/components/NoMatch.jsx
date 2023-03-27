import React from "react";
import Navigation from "./Navigation";

export default function NoMatch() {
  return (
    <div>
      <Navigation />
      <div className="wrapper">
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
          404:Page Not found
        </p>
      </div>
    </div>
  );
}
