import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useState, useEffect } from "react";

function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [major, setMajor] = useState("");
  const [stdNum, setStdNum] = useState("");
  const [phNum, setPhNum] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  useEffect(() => {
    setMajor(majorChange(stdNum));
  }, [stdNum]);

  function idCheck(id) {
    let id_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return id_regex.text(id);
  }

  function pwCheck(pw, passwordCheck) {
    return pw === passwordCheck;
  }

  function majorChange(stdNum) {
    console.log("a");
    const midStdNum = String(stdNum).substring(4, 7);
    if (midStdNum == "136") {
      return "컴퓨터공학부";
    } else if (midStdNum == "120") {
      return "기계공학부";
    } else if (midStdNum == "140") {
      return "메카트로닉스공학부";
    } else if (midStdNum == "161") {
      return "전기전자통신공학부";
    } else if (midStdNum == "151") {
      return "디자인공학과";
    } else if (midStdNum == "172") {
      return "건축공학과";
    } else if (midStdNum == "174") {
      return "에너지신소재화학공학부";
    } else if (midStdNum == "180") {
      return "산업경영학부";
    } else {
      return "";
    }
  }

  function phNumChange(phNum) {
    const phNumChanged = phNum
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    return phNumChanged;
  }

  const navigate = useNavigate();

  function signUp() {
    const newUser = {
      id: id,
      pw: pw,
      studentNUmber: stdNum,
      major: major,
      phoneNumber: phNum,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!idCheck(id)) {
      alert("유효하지 않은 이메일 주소입니다.");
    } else if (!pwCheck(pw, passwordCheck)) {
      alert("비밀번호를 다시 확인해주세요.");
    } else {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("회원가입이 완료되었습니다!");
      navigate("/login/main");
    }
  }

  function cancle() {
    navigate("/");
  }

  return (
    <div class="signUp">
      <h1>회원가입</h1>
      <div class="inputInfor">
        <input
          class="id"
          placeholder="아이디를 입력하세요."
          onChange={(e) => setId(e.target.value)}
        />
        <input
          class="pw"
          placeholder="비밀번호를 입력하세요."
          type="password"
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          class="pw-check"
          placeholder="비밀번호를 확인하세요"
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <input
          class="student-number"
          placeholder="학번을 입력하세요."
          maxlength="10"
          onChange={(e) => {
            setStdNum(e.target.value);
            setMajor(majorChange(stdNum));
          }}
        />
        <div class="major" contenteditable placeholder="전공을 입력하세요.">
          {major}
        </div>
        <input
          class="phone-number"
          placeholder="전화번호를 입력하세요."
          onChange={(e) => setPhNum(phNumChange(e.target.value))}
          value={phNum}
        />
      </div>
      <div class="move">
        <button class="signup" onClick={signUp}>
          회원가입
        </button>
        <button class="cancle" onClick={cancle}>
          취소
        </button>
      </div>
    </div>
  );
}

export default SignUp;
