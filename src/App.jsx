import { Toaster } from "react-hot-toast";
import Home from "./Components/Home";
function App() {
  return (
    <>
      {/* Toaster handling alert like message using react-hot-toast
       */}
      <Toaster />
      <Home />
    </>
  );
}

export default App;
