import Home from "./pages/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/navigation.component";
import SignIn from "./pages/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<div>shop</div>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
