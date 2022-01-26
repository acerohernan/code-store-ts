import { BrowserRouter } from "react-router-dom";
import RouterCodeStore from "./router";
import "./styles/globalStyles.scss";

import CardLayout from "./components/CardLayout";

function App() {
  return (
    <BrowserRouter>
      <CardLayout>
        <RouterCodeStore />
      </CardLayout>
    </BrowserRouter>
  );
}

export default App;
