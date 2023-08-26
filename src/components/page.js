import React from "react";

export default function Page({ children }) {
  return (
    <div style={{ margin: "auto", marginTop: 24, maxWidth: "1200px" }}>
      {children}
    </div>
  );
}
