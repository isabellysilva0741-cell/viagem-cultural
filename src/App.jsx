import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/entrar" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App