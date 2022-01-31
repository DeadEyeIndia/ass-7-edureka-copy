import React from "react";

import logo from "../../images/logo1.png";
import "./HeadLoginCreate.css";

const HeadLoginCreate = () => {
  return (
    <>
      <div className="app__header">
        <div className="app__header-head">
          <div className="app__header-img">
            <img src={logo} alt="e! logo" />
          </div>
          <div className="app__header-login_create">
            <div className="app__header-login">Login</div>
            <div className="app__header-create">Create an account</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadLoginCreate;
