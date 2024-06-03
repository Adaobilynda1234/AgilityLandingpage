import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      {/* header sectiom */}
      <Navbar />
      {/* body section */}
      <Hero />
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
