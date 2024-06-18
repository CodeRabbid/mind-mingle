import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { useEffect, useState } from "react";
import { setAccessToken } from "./accessToken";
import Header from "./Header";
import AddPost from "./pages/AddPost";
import MainContent from "./MainContent";

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
        <Route path="/" element={<MainContent />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/add-post" element={<AddPost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
