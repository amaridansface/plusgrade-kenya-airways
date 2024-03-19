import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout/Layout.tsx";
import EmptyPage from "./pages/EmptyPage.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/"
          element={<Navigate to="/home" replace={true} />}
        ></Route>
        <Route path="/*" element={<EmptyPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
