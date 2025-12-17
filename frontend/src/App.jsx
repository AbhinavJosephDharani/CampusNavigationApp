
import React, { useState } from 'react';

// UI last updated: 2025-12-17 (for redeploy test)
function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  const [locationsOpen, setLocationsOpen] = useState(false);
  const locations = [
    { name: 'ATMs', url: 'https://maps.wayne.edu/locations/atms/' },
    { name: 'Academic Departments', url: 'https://maps.wayne.edu/locations/academic-departments/' },
    { name: 'Administrative Offices', url: 'https://maps.wayne.edu/locations/administrative-offices/' },
    { name: 'Auditoriums/Theatres & Venues', url: 'https://maps.wayne.edu/locations/auditoriums-venues/' },
    { name: 'Blue Lights', url: 'https://maps.wayne.edu/locations/blue-lights/' },
    { name: 'Buildings', url: 'https://maps.wayne.edu/locations/buildings/' },
    { name: 'Centers & Institutes', url: 'https://maps.wayne.edu/locations/centers-institutes/' },
    { name: 'Clinics', url: 'https://maps.wayne.edu/locations/clinic/' },
    { name: 'Eateries', url: 'https://maps.wayne.edu/locations/eateries/' },
    { name: 'Extension Centers', url: 'https://maps.wayne.edu/locations/extension-centers/' },
    { name: 'FedEx', url: 'https://maps.wayne.edu/locations/fedex/' },
    { name: 'Gender neutral restrooms', url: 'https://maps.wayne.edu/locations/gender-neutral-restrooms/' },
    { name: 'Housing', url: 'https://maps.wayne.edu/locations/housing/' },
    { name: 'Lactation support rooms', url: 'https://maps.wayne.edu/locations/lactation-support-room/' },
    { name: 'Libraries', url: 'https://maps.wayne.edu/locations/libraries/' },
    { name: 'Menstrual products', url: 'https://maps.wayne.edu/locations/menstrual-products/' },
    { name: 'Nap Map', url: 'https://maps.wayne.edu/locations/nap-map/' },
    { name: 'OneCard Fill Locations', url: 'https://maps.wayne.edu/locations/onecard-fill/' },
    { name: 'Other', url: 'https://maps.wayne.edu/locations/other/' },
    { name: 'Our Neighbors', url: 'https://maps.wayne.edu/locations/our-neighbors/' },
    { name: 'Parking - Assigned', url: 'https://maps.wayne.edu/locations/assigned-parking/' },
    { name: 'Parking - Staff', url: 'https://maps.wayne.edu/locations/staff-parking/' },
    { name: 'Parking - Student', url: 'https://maps.wayne.edu/locations/student-parking/' },
    { name: 'Parking - Visitor', url: 'https://maps.wayne.edu/locations/guest-parking/' },
    { name: 'Reflection rooms', url: 'https://maps.wayne.edu/locations/reflection/' },
    { name: 'Retail - Bookstores', url: 'https://maps.wayne.edu/locations/bookstores/' },
    { name: 'Retail - Services & Specialty', url: 'https://maps.wayne.edu/locations/services/' },
    { name: 'Retail - Shops', url: 'https://maps.wayne.edu/locations/shops/' },
    { name: 'Schools & Colleges', url: 'https://maps.wayne.edu/locations/schools-colleges/' },
    { name: 'Tours - ArtWalk', url: 'https://maps.wayne.edu/locations/artwalk/' },
    { name: 'Tours - Self-guided', url: 'https://maps.wayne.edu/locations/self-guided/' },
    { name: 'Transportation - Main Campus Shuttle', url: 'https://maps.wayne.edu/locations/main-campus-shuttle/' },
    { name: 'Transportation - Medical Campus Shuttle', url: 'https://maps.wayne.edu/locations/medical-campus-shuttle/' },
    { name: 'Vending Machines - Beverage', url: 'https://maps.wayne.edu/locations/beverage/' },
    { name: 'Vending Machines - Coffee', url: 'https://maps.wayne.edu/locations/coffee/' },
    { name: 'Vending Machines - Fresh Food', url: 'https://maps.wayne.edu/locations/fresh-food/' },
    { name: 'Vending Machines - Ice Cream', url: 'https://maps.wayne.edu/locations/ice-cream/' },
    { name: 'Vending Machines - Snack', url: 'https://maps.wayne.edu/locations/snack/' },
    { name: 'Meditation rooms', url: 'https://maps.wayne.edu/locations/meditation-rooms/' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, Helvetica, sans-serif', background: '#f8f9fa' }}>
      {/* Sidebar Navigation */}
      <nav style={{ width: 260, background: '#005a43', color: '#fff', padding: '2rem 1rem', minHeight: '100vh', overflowY: 'auto' }}>
        <h2 style={{ color: '#fff', fontSize: 22, marginBottom: 32 }}>Wayne State Menu</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 17 }}>
          <li style={navItemStyle}>
            <button
              style={{ ...navLinkStyle, background: 'none', border: 'none', textAlign: 'left', padding: 0, cursor: 'pointer', width: '100%' }}
              onClick={() => setLocationsOpen((open) => !open)}
              aria-expanded={locationsOpen}
            >
              Locations {locationsOpen ? '▲' : '▼'}
            </button>
            {locationsOpen && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 10px', fontSize: 16 }}>
                {locations.map((loc) => (
                  <li key={loc.name} style={navItemStyle}>
                    <a href={loc.url} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>{loc.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>


        // ...existing code...
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
