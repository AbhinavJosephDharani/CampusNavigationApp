
import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ background: '#007bff', color: '#fff', padding: '1rem 2rem', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0 }}>Campus Navigation App</h1>
      </header>
      <main style={{ maxWidth: 600, margin: '0 auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 24 }}>
        <section style={{ marginBottom: 24 }}>
          <label htmlFor="search" style={{ fontWeight: 'bold', fontSize: 18 }}>Find a Room or Location:</label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="e.g. Room 101, Library, Cafeteria"
            style={{ display: 'block', width: '100%', marginTop: 8, padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
          />
          <button style={{ marginTop: 12, background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}>
            Search
          </button>
        </section>
        <section style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Quick Links</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button style={quickLinkStyle}>Events</button>
            <button style={quickLinkStyle}>Accessibility</button>
            <button style={quickLinkStyle}>Amenities</button>
            <button style={quickLinkStyle}>Favorites</button>
          </div>
        </section>
        <section>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Campus Map (Coming Soon)</h2>
          <div style={{ background: '#e9ecef', height: 180, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
            [Interactive Map Placeholder]
          </div>
        </section>
      </main>
      <footer style={{ textAlign: 'center', marginTop: 40, color: '#888', fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Campus Navigation App
      </footer>
    </div>
  );
}

const quickLinkStyle = {
  background: '#f1f3f4',
  border: '1px solid #007bff',
  color: '#007bff',
  borderRadius: 4,
  padding: '8px 16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: 15,
};

export default App;
