import './App.css';
import Header from './components/Header';
import PaintingStyles from './pages/PaintingStyles';
import Venturist from './pages/Venturist';
import Aboutus from './components/Aboutus';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import WhyArtmen from './components/WhyArtmen';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhyArtmen />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <TopHeader />
              <Aboutus />
            </>
          }
        />
        <Route
          path="/venturist"
          element={
            <>
              <TopHeader />
              <Venturist />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <TopHeader />
              <Faqs />
            </>
          }
        />
        <Route
          path="/paintingstyles"
          element={
            <>
              <TopHeader />
              <PaintingStyles />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
