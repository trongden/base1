import { Toaster } from "react-hot-toast";
// import ListPage from "./pages/ListPage";
import Header from "./component/header";
import Footer from "./component/footer";
// import Counter from "./component/counter";
// import Show from "./component/show";
import ListPage from "./pages/ListPage";
function App() {
  const name = "hoadv";
  return (
    <>
    <Header/> 
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB502</h1>
        <p>ten toi la : {name}</p>
      </div>
      {/* <Counter/> */}
      <ListPage/>
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;