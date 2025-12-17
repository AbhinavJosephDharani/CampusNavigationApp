
import React, { useState } from 'react';

// UI last updated: 2025-12-17 (for redeploy test)
function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, Helvetica, sans-serif', background: '#f8f9fa' }}>
      {/* Sidebar Navigation */}
      <nav style={{ width: 260, background: '#003366', color: '#fff', padding: '2rem 1rem', minHeight: '100vh', overflowY: 'auto' }}>
        <h2 style={{ color: '#fff', fontSize: 22, marginBottom: 32 }}>Wayne State Menu</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 17 }}>
          <li style={navItemStyle}>ATMs</li>
          <li style={navItemStyle}>Academic Departments</li>
          <li style={navItemStyle}>Administrative Offices</li>
          <li style={navItemStyle}>Auditoriums/Theatres & Venues</li>
          <li style={navItemStyle}>Blue Lights</li>
          <li style={navItemStyle}>Buildings</li>
          <li style={navItemStyle}>Centers & Institutes</li>
          <li style={navItemStyle}>Clinics</li>
          <li style={navItemStyle}>Eateries</li>
          <li style={navItemStyle}>Extension Centers</li>
          <li style={navItemStyle}>FedEx</li>
          <li style={navItemStyle}>Gender neutral restrooms</li>
          <li style={navItemStyle}>Housing</li>
          <li style={navItemStyle}>Lactation support rooms</li>
          <li style={navItemStyle}>Libraries</li>
          <li style={navItemStyle}>Menstrual products</li>
          <li style={navItemStyle}>Nap Map</li>
          <li style={navItemStyle}>OneCard Fill Locations</li>
          <li style={navItemStyle}>Our Neighbors</li>
          <li style={navItemStyle}>Parking - Assigned</li>
          <li style={navItemStyle}>Parking - Staff</li>
          <li style={navItemStyle}>Parking - Student</li>
          <li style={navItemStyle}>Parking - Visitor</li>
          <li style={navItemStyle}>Reflection rooms</li>
          <li style={navItemStyle}>Retail - Bookstores</li>
          <li style={navItemStyle}>Retail - Services & Specialty</li>
          <li style={navItemStyle}>Retail - Shops</li>
          <li style={navItemStyle}>Schools & Colleges</li>
          <li style={navItemStyle}>Tours - ArtWalk</li>
          <li style={navItemStyle}>Tours - Self-guided</li>
          <li style={navItemStyle}>Transportation - Main Campus Shuttle</li>
          <li style={navItemStyle}>Transportation - Medical Campus Shuttle</li>
          <li style={navItemStyle}>Vending Machines - Beverage</li>
          <li style={navItemStyle}>Vending Machines - Coffee</li>
          <li style={navItemStyle}>Vending Machines - Fresh Food</li>
          <li style={navItemStyle}>Vending Machines - Ice Cream</li>
          <li style={navItemStyle}>Vending Machines - Snack</li>
          <li style={navItemStyle}>Meditation rooms</li>
        </ul>
        <div style={{ marginTop: 40 }}>
          <label htmlFor="lang" style={{ fontWeight: 'bold', fontSize: 15 }}>Language:</label>
          <select id="lang" style={{ marginLeft: 8, padding: 4, borderRadius: 4 }}>
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>हिन्दी</option>
          </select>
        </div>
      </nav>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <header style={{ background: '#007bff', color: '#fff', padding: '1rem 2rem', marginBottom: '2rem' }}>
          <h1 style={{ margin: 0 }}>Campus Navigation App</h1>
        </header>
        <main style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 24 }}>
          {/* Search Section */}
          <section style={{ marginBottom: 24 }}>
            <label htmlFor="search" style={{ fontWeight: 'bold', fontSize: 18 }}>Find a Room, Office, or Location:</label>
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="e.g. Room 101, Prof. Smith, Library, Cafeteria"
              style={{ display: 'block', width: '100%', marginTop: 8, padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
            />
            <button style={{ marginTop: 12, background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
              Search
            </button>
          </section>
          {/* Stakeholder Features Placeholders */}
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, marginBottom: 8 }}>Navigation & Accessibility</h2>
            <ul style={{ paddingLeft: 18, color: '#333' }}>
              <li>Indoor turn-by-turn navigation (Coming Soon)</li>
              <li>Alternate routes during closures (Coming Soon)</li>
              <li>Accessibility routes (Coming Soon)</li>
            </ul>
          </section>
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, marginBottom: 8 }}>Events & Announcements</h2>
            <ul style={{ paddingLeft: 18, color: '#333' }}>
              <li>Event navigation (Coming Soon)</li>
              <li>Share announcements, disruptions (Coming Soon)</li>
              <li>Push notifications for closures (Coming Soon)</li>
            </ul>
          </section>
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, marginBottom: 8 }}>Favorites & Amenities</h2>
            <ul style={{ paddingLeft: 18, color: '#333' }}>
              <li>Bookmarks/favorites tab (Coming Soon)</li>
              <li>Highlight amenities: restrooms, water fountains, ATMs, cafés (Coming Soon)</li>
            </ul>
          </section>
          <section>
            <h2 style={{ fontSize: 20, marginBottom: 8 }}>Wayne State Interactive Campus Map</h2>
            <div style={{ background: '#e9ecef', borderRadius: 6, overflow: 'hidden', marginBottom: 12 }}>
              <iframe
                title="Wayne State Interactive Map"
                src="https://maps.wayne.edu/"
                width="100%"
                height="350"
                style={{ border: 'none', borderRadius: 6 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ color: '#888', fontSize: 13, textAlign: 'center' }}>
              <a href="https://maps.wayne.edu/locations/" target="_blank" rel="noopener noreferrer">Browse all locations & amenities</a>
            </div>
          </section>
        </main>
        <footer style={{ textAlign: 'center', marginTop: 40, color: '#888', fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Campus Navigation App
        </footer>
      </div>
    </div>
  );
}


const navItemStyle = {
  marginBottom: 18,
  padding: '8px 0',
  cursor: 'pointer',
  borderRadius: 4,
  paddingLeft: 10,
  transition: 'background 0.2s',
};

export default App;
