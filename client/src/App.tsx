import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Bye from "./pages/Bye";
import { useEffect, useState } from "react";
import { setAccessToken } from "./accessToken";
import Header from "./Header";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    })
      .then((x) => x.json())
      .then((y) => {
        setAccessToken(y.accessToken);
        setLoading(false);
      }),
      [];
  });

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bye" element={<Bye />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
