import Header from "./components/Header";
import Deserts from "./components/Deserts";
import { CartContextProvider } from "./store/CarContext"; 

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Deserts />
    </CartContextProvider>
  );
}

export default App;
