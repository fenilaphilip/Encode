import Navbar from "./components/navbar/Navbar.tsx";
import Encode from "./components/Encode.tsx";
import EncodeContextProvider from "./store/EncodeContext.tsx";

function App() {
  return (
    <EncodeContextProvider>
      <Navbar />
      <main className="mainContent m-1 p-2">
        <Encode />
      </main>
    </EncodeContextProvider>
  );
}

export default App;
