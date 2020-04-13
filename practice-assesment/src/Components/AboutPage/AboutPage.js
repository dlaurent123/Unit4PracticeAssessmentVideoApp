import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="aboutDiv">
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "18px",
            paddingLeft: "40px",
          }}
        >
          This app was created by Danny Laurent. Sit back
        </p>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "18px",
            paddingLeft: "40px",
            marginTop: "8px",
          }}
        >
          relax and enjoy some of your favorite Youtube videos!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
