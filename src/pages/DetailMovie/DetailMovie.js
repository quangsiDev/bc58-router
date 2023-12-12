import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailMovie() {
  const [detail, setDetail] = useState({});
  // useParams ~ trả về tham số nằm trên URL
  let { idPhim } = useParams();

  //   gọi api
  useEffect(() => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
      },
    })
      .then((res) => {
        setDetail(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <img width={500} src={detail.hinhAnh} alt="" />
      <span>{detail.tenPhim}</span>
    </div>
  );
}
