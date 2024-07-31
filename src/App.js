import "./index.css";
import ApplicantForm from "./components/ApplicantForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-800 flex justify-center">
        <ApplicantForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
