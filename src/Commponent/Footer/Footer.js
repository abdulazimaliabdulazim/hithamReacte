import React from "react";
import style from "./Footer.module.css";
import Container from "../Container/Container";

const Footer = () => {
  console.log("Footer");
  return (
    <footer>
      <Container>
        <p>
          {`حقوق الطبع محفوظة ${new Date().getFullYear()}`}
          <br />
          النسخة التجريبية المؤقتة الاصدار 3.0
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
