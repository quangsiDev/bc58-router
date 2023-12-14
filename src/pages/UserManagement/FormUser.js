import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice";
import axios from "axios";
import { message } from "antd";

export default function FormUser() {
  // state
  let dispatch = useDispatch();
  let user = useSelector((state) => state.userSlice.user);
  let { name, account, password } = user;
  let handleChangeForm = (e) => {
    let { name, value } = e.target;
    //
    let data = { ...user, [name]: value };
    dispatch(setUser(data));
  };
  let handleAdd = () => {
    // gọi api
    axios
      .post("https://643a58ee90cd4ba563f77786.mockapi.io/users", user)
      .then((res) => {
        console.log(res);
        message.success("Thêm user thành công");
      })
      .catch((err) => {
        console.log(err);
        message("Không thêm được user");
      });
  };
  return (
    <form>
      <input
        onChange={handleChangeForm}
        value={name}
        name="name"
        type="text"
        class="form-control"
        placeholder=""
      />
      <input
        onChange={handleChangeForm}
        value={account}
        name="account"
        type="text"
        class="form-control"
        placeholder=""
      />
      <input
        onChange={handleChangeForm}
        value={password}
        name="password"
        type="text"
        class="form-control"
        placeholder=""
      />
      <button onClick={handleAdd} type="button" className="btn btn-success">
        Add
      </button>
    </form>
  );
}
