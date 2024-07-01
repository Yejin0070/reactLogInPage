import "./topnav.css";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="topnav">
      <h1>topnav</h1>
      <Link to="/login" className="signin-link">
        로그인
      </Link>
      <Link to="/signup" className="signup-link">
        회원가입
      </Link>
    </div>
  );
}

export default TopNav;
