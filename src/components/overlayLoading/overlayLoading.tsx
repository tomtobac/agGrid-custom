import React, { Component } from "react";
import { Loading } from "../loading";

export default class CustomOverlayLoading extends Component<{}, {}> {
  render() {
    return (
      <div className="">
        <Loading />
        <span>Loading...</span>
      </div>
    );
  }
}
