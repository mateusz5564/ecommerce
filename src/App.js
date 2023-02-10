import { useEffect } from "react";
import { onAuthStateChangedListener } from "./firebase/firebase";
import Home from "./pages/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation/navigation.component";
import Authentication from "./pages/authentication/authentication.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
