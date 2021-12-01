import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelMemoryHome from "./component/TravelMemory/TravelMemoryHome/TravelMemoryHome";
import TravelMemoryPostDetails from "./component/TravelMemory/TravelMemoryPostDetails/TravelMemoryPostDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route exact path="/post" element={<TravelMemoryHome />} />
          <Route exact path="/post/:id" element={<TravelMemoryPostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;