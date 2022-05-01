import React from "react";

const Footer = () => {
  return (
    <div className="container fixed-bottom">
      <footer className=" py-3 my-4 border-top">
        <div className="">
          <span className="text-muted">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
