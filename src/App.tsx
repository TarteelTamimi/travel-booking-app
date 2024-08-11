import { BrowserRouter } from "react-router-dom";
import TransitionRoutes from "./components/TransitionRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <TransitionRoutes />
    </BrowserRouter>
  );
};

export default App;
