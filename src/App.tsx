import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, ProjectDetails, Projects } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-mintGreenLight overflow-x-hidden">
      <div className="relative w-[90%] min-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-charcoalGray">
        <NavBar />
        <Routes>
          {/* Home route */}
          <Route index element={<Home />} />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Projects route */}
          <Route path="/projects" element={<Projects />} />


          {/* Project Details route */}
          <Route path="/projects/:slug" element={<ProjectDetails />} />

          {/* Contact route */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
