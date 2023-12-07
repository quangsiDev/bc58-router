import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
let user = { name: "tommy", age: 2 };
user.name = "boboy";
user["name"] = "boboy";
user["age"] = 3;
//
export default function LoginPage() {
  let [formValue, setFromValue] = useState({
    username: "alice",
    password: "123",
  });
  let handleChangeForm = (e) => {
    console.log("yes", e.target.name);
    let { value, name } = e.target;
    setFromValue({ ...formValue, [name]: value });
    // let newFormValue = { ...formValue };
    // newFormValue.username = value;
    // setFromValue(newFormValue);
  };
  let handleLogin = () => {
    // meta meta
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
      },
      data: {
        taiKhoan: formValue.username,
        matKhau: formValue.password,
      },
    })
      .then((res) => {
        message.success("Đăng nhập thành công");
        console.log(res);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");

        console.log(err);
      });
  };
  return (
    <div className="container pt-5 ">
      <input
        name="username"
        onChange={handleChangeForm}
        value={formValue.username}
        type="text"
        class="form-control"
        placeholder="Username"
      />
      <input
        name="password"
        onChange={handleChangeForm}
        value={formValue.password}
        type="text"
        class="form-control"
        placeholder="Password"
      />
      <button onClick={handleLogin} className="btn btn-success">
        Login
      </button>
    </div>
  );
}
