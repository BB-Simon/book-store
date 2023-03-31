// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as BrowserRoutes,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';
import { Navigation } from './components';
import { Categories, Home } from './pages';

const Layout = () => (
  <main>
    <Navigation />
    <Outlet />
  </main>
);

function App() {
  return (
    <BrowserRoutes>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRoutes>
  );
}

export default App;
