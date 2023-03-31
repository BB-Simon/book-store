import {
  BrowserRouter as BrowserRoute,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';

const Layout = () => (
  <main>
    <Outlet />
  </main>
);

function App() {
  return (
    <BrowserRoute>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRoute>
  );
}

export default App;
