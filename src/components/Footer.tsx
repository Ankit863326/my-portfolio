import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap" as const,
        gap: "12px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "inherit",
          opacity: 0.5,
        }}
      >
        © 2026 Ankit Singh. All rights reserved.
      </p>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "inherit",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        Built with{" "}
        <span style={{ color: "#ef4444", opacity: 1, fontSize: "16px" }}>♥</span>
        using React, TypeScript &amp; Material-UI
      </p>
    </footer>
  );
};

export default Footer;