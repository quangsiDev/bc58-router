import React, { Component } from "react";
import Footer from "./Footer";

export default class LifeCycle extends Component {
  state = {
    soLuong: 1,
  };
  componentDidMount() {
    // những dòng code đặt trong componentDidMount ~ chỉ chạy 1 lần duy nhất khi user load trang
    // thường sử dụng để call api

    console.log("did mount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ soLuong: this.state.soLuong - 1 });
          }}
          className="btn btn-dark"
        >
          -
        </button>
        <strong className="mx-3">{this.state.soLuong}</strong>
        <button
          onClick={() => {
            this.setState({ soLuong: this.state.soLuong + 1 });
          }}
          className="btn btn-success"
        >
          +
        </button>
        <Footer />
      </div>
    );
  }

  componentDidUpdate() {
    console.log("did update");
    // tự động được gọi, sau khi render() chạy
  }

  componentWillUnmount() {
    // tự động được gọi khi component bị loại bỏ khỏi layout
    console.log("un mount ~ đăng xuất");
  }
}
