import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:ml-40 mt-12 md:flex">
        <Form />
      </div>
    </div>
  );
}

export default App;
