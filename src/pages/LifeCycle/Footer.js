import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    console.log("footer render");
    return <div className="p-5 bg-warning">Footer</div>;
  }
}
