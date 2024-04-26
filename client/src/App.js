import "./App.css";
import Header from "./component/header";
import Upload from "./component/upload";

function App() {
  return (
    <div className="flex items-center justify-center bg-slate-300 h-screen">
      <div className="flex flex-col h-96 w-3/4 bg-slate-500 items-center  rounded-2xl">
        <Header />
        <Upload />
      </div>
    </div>
  );
}

export default App;
