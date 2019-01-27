import React, { Component } from "react";
import "./loading.scss";

export const Loading: React.StatelessComponent<{}> = () => {
  return (
    <div className="c-loading--wrapper">
      <div className="c-loading--dot u-background--red" />
      <div className="c-loading--dot u-background--orange" />
      <div className="c-loading--dot u-background--blue" />
    </div>
  );
};
