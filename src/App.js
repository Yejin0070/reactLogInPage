import { Route, Routes } from "react-router-dom";
import TopNav from "./TopNav/index";
import Main from "./Main/index";
import SignUp from "./SignUp/index";
import LogIn from "./LogIn/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav />} />
      <Route path="/login/main" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
