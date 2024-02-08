import Header from "./components/Header";
import Deserts from "./components/Deserts";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CarContext"; 
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Deserts />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
