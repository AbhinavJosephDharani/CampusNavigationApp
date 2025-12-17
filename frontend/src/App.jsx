
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
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/atms/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>ATMs</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/academic-departments/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Academic Departments</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/administrative-offices/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Administrative Offices</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/auditoriums-venues/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Auditoriums/Theatres & Venues</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/blue-lights/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Blue Lights</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/buildings/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Buildings</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/centers-institutes/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Centers & Institutes</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/clinic/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Clinics</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/eateries/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Eateries</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/extension-centers/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Extension Centers</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/fedex/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>FedEx</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/gender-neutral-restrooms/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Gender neutral restrooms</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/housing/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Housing</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/lactation-support-room/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Lactation support rooms</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/libraries/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Libraries</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/menstrual-products/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Menstrual products</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/nap-map/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Nap Map</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/onecard-fill/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>OneCard Fill Locations</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/other/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Other</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/our-neighbors/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Our Neighbors</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/assigned-parking/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Parking - Assigned</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/staff-parking/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Parking - Staff</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/student-parking/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Parking - Student</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/guest-parking/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Parking - Visitor</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/reflection/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Reflection rooms</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/bookstores/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Retail - Bookstores</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/services/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Retail - Services & Specialty</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/shops/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Retail - Shops</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/schools-colleges/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Schools & Colleges</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/artwalk/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Tours - ArtWalk</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/self-guided/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Tours - Self-guided</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/main-campus-shuttle/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Transportation - Main Campus Shuttle</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/medical-campus-shuttle/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Transportation - Medical Campus Shuttle</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/beverage/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Vending Machines - Beverage</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/coffee/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Vending Machines - Coffee</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/fresh-food/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Vending Machines - Fresh Food</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/ice-cream/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Vending Machines - Ice Cream</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/snack/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Vending Machines - Snack</a></li>
          <li style={navItemStyle}><a href="https://maps.wayne.edu/locations/meditation-rooms/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Meditation rooms</a></li>
        </ul>


        const navLinkStyle = {
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'normal',
          display: 'block',
          width: '100%',
          padding: '2px 0',
        };
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

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'normal',
  display: 'block',
  width: '100%',
  padding: '2px 0',
};

export default App;
