import { useNavigate } from "react-router-dom";
import "./main.css";

export default function Main() {
  const navigate = useNavigate();
  function storageReset() {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  }
  return (
    <div class="logOutBox">
      <h1>메인 페이지</h1>
      <button class="logOut" onClick={storageReset}>
        로그아웃
      </button>
    </div>
  );
}
