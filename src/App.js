import { categories } from "./categories";
import Directory from "./components/directory/Directory.component";

function App() {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default App;
