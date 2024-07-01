import "./login.css";
import { useState } from "react";

export default function LogIn() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  let count = 0;
  function move() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user_input = { id: id.value, pw: pw.value };
    let check = false;
    if (document.cookie.includes("loginBan=true")) {
      alert("로그인이 1시간 동안 금지되었습니다.");
    }
    if (id.value == "" || pw.value == "") {
      alert("id, pw를 입력해주세요");
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === user_input.id || users[i].pw === user_input.pw) {
        check = true;
        break;
      }
    }
    if (!check) {
      alert("id 또는 PW가 일치하지 않습니다.");
      count++;
      if (count == 5) {
        document.cookie = "loginBan=true; path=/; max-age=3600;";
        alert("로그인이 5회 이상 실패하여 1시간 동안 로그인할 수 없습니다.");
      }
    } else {
      sessionStorage.setItem("users", JSON.stringify(users));
      document.cookie =
        "users = " + JSON.stringify(users) + "; path=/; max-age=259200;";
      window.location.href = "/login/main";
    }
  }
  return (
    <div class="signIn">
      <h1>로그인</h1>
      <div className="inputInfor">
        <input className="id" placeholder="아이디를 입력하세요." />
        <input
          className="pw"
          placeholder="비밀번호를 입력하세요."
          type="password"
        />
      </div>
      <button className="login" onClick={move}>
        로그인
      </button>
    </div>
  );
}
