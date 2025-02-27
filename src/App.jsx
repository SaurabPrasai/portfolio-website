import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import DynamicLayout from "./layout/DynamicLayout";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import PageNotFound from "./layout/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route
          path="/skills"
          element={
            <DynamicLayout>
              <Skills />
            </DynamicLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <DynamicLayout>
              <Projects />
            </DynamicLayout>
          }
        />
         <Route
          path="/*"
          element={
            <PageNotFound>
              <NotFound />
            </PageNotFound>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
