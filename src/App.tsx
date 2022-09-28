import { HomePage } from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import { UserPage } from "./pages/UserPage/UserPage";
import styles from "./App.module.css";
import { Layout } from "./components/Layout/Layout";
import { IssuesPage } from "./pages/IssuesPage/IssuesPage";
function App() {
  return (
    <div className={styles["app"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:username" element={<UserPage />} />
          <Route
            path="/users/:username/repos/:repo/issues"
            element={<IssuesPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
