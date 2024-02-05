import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import InformationContainer from "./components/InformationContainer";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Germano Ribeiro</h1>
      <Sidebar />
      <MainContent />
     
    </div>
  );
}

export default App;