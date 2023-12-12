import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {
  state = {
    movieArr: [],
  };
  // load ds phim từ api
  componentDidMount() {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
      },
    })
      .then((res) => {
        this.setState({ movieArr: res.data.content });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderMovieList = () => {
    return this.state.movieArr.map((item) => {
      return (
        <div className="col-2 p-2">
          <img
            style={{ width: "100%", height: 300, objectFit: "cover" }}
            src={item.hinhAnh}
            alt=""
          />

          <button className="btn btn-success">
            <NavLink className="text-white" to={`/detail/${item.maPhim}`}>
              Xem chi tiết
            </NavLink>
          </button>
        </div>
      );
    });
  };

  render() {
    console.log("movieArr", this.state.movieArr);
    return <div className="row">{this.renderMovieList()}</div>;
  }
}
// console.log sẽ chạy mấy lần khi load trang
