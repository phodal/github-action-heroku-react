import TodoList from "./features/todo/TodoList";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
