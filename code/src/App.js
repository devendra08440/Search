import './App.css';
import Search from './Component/Search/Search';
import Pagination from './Component/Pagination/Pagination';
import Story from './Component/Story/Story';

function App() {
  return (
    <div className="App">
      <Search/>
      <Pagination/>
      <Story/>
    </div>
  );
}

export default App;
