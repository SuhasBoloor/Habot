import Footer from "./Component/Footer/Footer";
import Helper from "./Component/Helper/Helper";
import NavBar from "./Component/NavBar/NavBar";
import VideoBuyer from "./Component/VideoBuyer/VideoBuyer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <VideoBuyer/>
      <Helper/>
      <Footer/>
    </div>
  );
}

export default App;
