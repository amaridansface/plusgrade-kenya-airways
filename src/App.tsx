import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/"
          element={<Navigate to="/home" replace={true} />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
