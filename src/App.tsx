import { SearchBar } from "@/component/SearchBar";
import MyTables from "@/component/model/MyTables";

function App() {
  return (
    <div>
      <h1>my table viewer</h1>
      <SearchBar />

      <MyTables />
    </div>
  );
}

export default App;
