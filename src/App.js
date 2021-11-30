import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelMemoryHome from "./component/TravelMemory/TravelMemoryHome/TravelMemoryHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<TravelMemoryHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;