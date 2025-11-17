import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import V60 from './pages/V60';
import FlairEspresso from './pages/FlairEspresso';
import MokaPot from './pages/MokaPot';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v60" element={<V60 />} />
          <Route path="/flair-espresso" element={<FlairEspresso />} />
          <Route path="/moka-pot" element={<MokaPot />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
