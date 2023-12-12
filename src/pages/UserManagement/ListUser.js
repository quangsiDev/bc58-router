import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserList } from "./userSlice";
import { message } from "antd";

export default function ListUser() {
  let dispatch = useDispatch(); // đẩy data lên redux
  let userList = useSelector((state) => state.userSlice.userList); // lấy data từ redux về
  useEffect(() => {
    fetchUserList();
  }, []);
  let fetchUserList = () => {
    axios
      .get("https://643a58ee90cd4ba563f77786.mockapi.io/users")
      .then((res) => {
        dispatch(setUserList(res.data));
        console.log(res);
        message.success("Lấy dữ liệu thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let handleDelete = (id) => {
    axios
      .delete(`https://643a58ee90cd4ba563f77786.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res);
        message.success("xoá thành công");
        // gọi lại api lấy danh sách người dùng mới nhất từ server
        fetchUserList();
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra");
        console.log(err);
      });
  };

  let renderList = () => {
    return userList.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <th>
            <button
              onClick={() => {
                handleDelete(user.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Account</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </table>
      <h1>hello</h1>
    </div>
  );
}
