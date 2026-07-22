import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import ImpressumPage from "@/pages/ImpressumPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import { Toaster } from "@/components/ui/sonner";

function AppShell() {
  return (
    <div className="App">
      <Landing />
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
        <Route path="/agb" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
