import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/novigation/Navigation.component";
import SignIn from "./routes/sign-in/Sign-in.component";

function Shop() {
  return (
    <>
      <h1>THis is shop page</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
