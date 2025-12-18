


import React, { useState } from 'react';

// Dummy feature handler
const dummyFeature = (desc) => () => alert(desc + ' (dummy feature)');

// UI last updated: 2025-12-17 (for redeploy test)
function App() {
  const [search, setSearch] = useState('');
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [studentPass, setStudentPass] = useState('');
  const [studentLoginMsg, setStudentLoginMsg] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  // Example menu items
  const menuItems = [
    { label: 'Dashboard', href: '#' },
    { label: 'Map', href: '#' },
    { label: 'Favorites', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Settings', href: '#' },
  ];

  return (
    <div className="dark-app-layout">
      {/* Top Bar */}
      <header className="dark-topbar">
        <div className="dark-logo">Campus Quest</div>
        <nav className="dark-menu">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="dark-menu-link">{item.label}</a>
          ))}
        </nav>
        <div className="dark-login-btns">
          <button className="dark-login-btn" onClick={() => setShowStudentLogin(true)}>Student Login</button>
          <button className="dark-login-btn" disabled>Teacher Login</button>
          <button className="dark-login-btn" disabled>Faculty Login</button>
        </div>
      </header>
      <div className="dark-main-content">
        {/* Sidebar */}
        <aside className="dark-sidebar">
          <div className="dark-sidebar-section">
            <div className="dark-sidebar-title">Destination</div>
            <div className="dark-sidebar-destination">Science Hall</div>
            <button className="dark-sidebar-btn">Add to Favorites</button>
            <div className="dark-sidebar-tabs">
              <button className="dark-sidebar-tab dark-active">Instructions</button>
              <button className="dark-sidebar-tab">Favorites</button>
              <button className="dark-sidebar-tab">Events</button>
            </div>
          </div>
          <div className="dark-sidebar-section">
            <div className="dark-sidebar-subtitle">Turn-by-Turn Navigation</div>
            <div className="dark-sidebar-progress">
              <div>Distance: <span>0m/360m</span></div>
              <div>Time: <span>~5 min</span></div>
            </div>
            <div className="dark-sidebar-step">Head towards Engineering Hall on West Kirby Street (~311 m, 4 min)</div>
            <div className="dark-sidebar-next">Next: Science Hall on East Kirby Street (~49 m)</div>
          </div>
        </aside>
        {/* Main Map Area */}
        <main className="dark-map-area">
          <iframe
            title="Wayne State Interactive Map"
            src="https://maps.wayne.edu/"
            width="100%"
            height="600"
            className="dark-map-iframe"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </main>
      </div>
      {/* Student Login Modal */}
      {showStudentLogin && (
        <div className="dark-modal-bg" onClick={() => setShowStudentLogin(false)}>
          <div className="dark-modal" onClick={e => e.stopPropagation()}>
            <h2>Student Login</h2>
            <form onSubmit={e => { e.preventDefault(); setStudentLoginMsg('Connecting...'); }}>
              <label htmlFor="student-id">Student ID</label>
              <input id="student-id" type="text" value={studentId} onChange={e => setStudentId(e.target.value)} required />
              <label htmlFor="student-pass">Password</label>
              <input id="student-pass" type="password" value={studentPass} onChange={e => setStudentPass(e.target.value)} required />
              <button type="submit">Login</button>
            </form>
            {studentLoginMsg && <div className="dark-modal-msg">{studentLoginMsg}</div>}
          </div>
        </div>
      )}
    </div>
  );
}



export default App;
