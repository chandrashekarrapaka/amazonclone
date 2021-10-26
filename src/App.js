
import './App.css';
import Header from './Header';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>
        Hello
        {/* Header
        Home */}
        <SearchIcon className="header_searchIcon" />
      </h1>
    </div>
  );
}

export default App;
