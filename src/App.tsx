import Navbar from "./components/Navbar.tsx";
import Input from "./components/UI/Input.tsx";
import EncodeContextProvider from "./store/EncodeContext.tsx";

function App() {
  return (
    <EncodeContextProvider>
      <Navbar />
      <main>
        <Input />
      </main>
    </EncodeContextProvider>
  );
}

export default App;
