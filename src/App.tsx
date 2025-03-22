import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Support } from './pages/Support';
import { Learn } from './pages/Learn';
import { Emergency } from './pages/Emergency';
import { Helpline } from './pages/Helpline';
import { Counseling } from './pages/Counseling';
import { Groups } from './pages/Groups';
import { Resources } from './pages/Resources';
import { Community } from './pages/Community';
import { SelfCare } from './pages/SelfCare';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/self-care" element={<SelfCare />} />
      </Routes>
    </Router>
  );
}

export default App;