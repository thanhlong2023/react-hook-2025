import Session17 from "./Rikkei/Session17";
import Session18 from "./Rikkei/Session18";
import Session19 from "./Rikkei/Session19";
import Session20 from "./Rikkei/Session20";
import Session21 from "./Rikkei/Session21";
import Session25 from "./Rikkei/Session25";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Rikkei/Home";

import Home25 from "./Rikkei/Session25/Home";
import Contact from "./Rikkei/Session25/Contact";
import Login from "./Rikkei/Session25/Login";
import Register from "./Rikkei/Session25/Register";
import NotFound from "./Rikkei/Session25/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home làm layout cha */}
        <Route path="/" element={<Home />}>
          <Route path="17" element={<Session17 />} />
          <Route path="18" element={<Session18 />} />
          <Route path="19" element={<Session19 />} />
          <Route path="20" element={<Session20 />} />
          <Route path="21" element={<Session21 />} />
          <Route path="25" element={<Session25 />}>
            <Route index element={<Home25 />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
