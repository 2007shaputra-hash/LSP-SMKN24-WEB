import { useState } from 'react';
import ManajemenData from './ManajemenData';
import ListAsesmen from './ListAsesmen';
import AsesmenDiikuti from './AsesmenDiikuti';
import logoImage from '/src/img/image 12.png';

// KOMPONEN SIDEBAR YANG BISA DI-EXPORT (seperti Navbar)
export function DashboardSidebar({ activeMenu, onMenuClick }) {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '20px',
      paddingBottom: '20px',
      position: 'relative',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      margin: '15px',
      height: 'calc(100vh - 30px)'
    }}>
      {/* Logo Section */}
      <div style={{
        padding: '20px 30px',
        marginBottom: '30px',
        textAlign: 'center',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          marginBottom: '15px'
        }}>
          <img
            src={logoImage}
            alt="LSP Logo"
            style={{
              width: '200%',
              height: '200%',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        </div>
        <h3 style={{
          margin: '0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#1a1a1a'
        }}>
        </h3>
      </div>


      {/* Menu Items */}
      <div style={{ flex: 1, paddingLeft: '20px', paddingRight: '20px' }}>
        {/* Dashboard Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          marginBottom: '8px',
          backgroundColor: activeMenu === 'Dashboard' ? '#ff6b35' : 'transparent',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: activeMenu === 'Dashboard' ? 'white' : '#666'
        }}
        onClick={() => onMenuClick('Dashboard')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Dashboard') {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Dashboard') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>Dashboard</span>
        </div>

        {/* Manajemen Data Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          marginBottom: '8px',
          backgroundColor: activeMenu === 'ManajemenData' ? '#ff6b35' : 'transparent',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: activeMenu === 'ManajemenData' ? 'white' : '#666'
        }}
        onClick={() => onMenuClick('ManajemenData')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'ManajemenData') {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'ManajemenData') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>Manajemen data</span>
        </div>

        {/* List Asesmen Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          marginBottom: '8px',
          backgroundColor: activeMenu === 'ListAsesmen' ? '#ff6b35' : 'transparent',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: activeMenu === 'ListAsesmen' ? 'white' : '#666'
        }}
        onClick={() => onMenuClick('ListAsesmen')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'ListAsesmen') {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'ListAsesmen') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <line x1="8" y1="6" x2="21" y2="6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="8" y1="12" x2="21" y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="8" y1="18" x2="21" y2="18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="3.01" y2="6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="12" x2="3.01" y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="18" x2="3.01" y2="18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>List Asesmen</span>
        </div>

        {/* Asesmen Diikuti Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          marginBottom: '8px',
          backgroundColor: activeMenu === 'AsesmenDiikuti' ? '#ff6b35' : 'transparent',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: activeMenu === 'AsesmenDiikuti' ? 'white' : '#666'
        }}
        onClick={() => onMenuClick('AsesmenDiikuti')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'AsesmenDiikuti') {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'AsesmenDiikuti') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>Asesmen Diikuti</span>
        </div>
      </div>

      {/* Bottom Menu Items */}
      <div style={{ paddingLeft: '20px', paddingRight: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
        {/* Profile Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          marginBottom: '8px',
          backgroundColor: activeMenu === 'Profile' ? '#ff6b35' : 'transparent',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: activeMenu === 'Profile' ? 'white' : '#666'
        }}
        onClick={() => onMenuClick('Profile')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Profile') {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Profile') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>Profile</span>
        </div>

        {/* Logout Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: '#666'
        }}
        onClick={() => onMenuClick('Logout')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f8f9fa';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <polyline points="16,17 21,12 16,7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: '500' }}>Log out</span>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      margin: '20px'
    }}>
      {/* Profile Header */}
      <div style={{ textAlign: 'center' }}>
  <h1
    style={{
      fontSize: '24px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '30px'
    }}
  >
    PROFIL ANDA
  </h1>
  <p style={{ color: '#666', marginBottom: '30px' }}>
    Lengkapi informasi profil anda
  </p>
</div>


      {/* Profile Photo Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a',
          marginBottom: '15px'
        }}>
          Foto Profil
        </h2>
        <div style={{
          border: '2px dashed #e0e0e0',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            fontWeight: '500',
            marginBottom: '10px',
            color: '#333'
          }}>
            <strong>Upload Foto Profil</strong>
          </p>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Format PNG, JPG, Maksimal 2MB
          </p>
        </div>
      </div>

      {/* Personal Information Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a',
          marginBottom: '15px'
        }}>
          Informasi Pribadi
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#333'
          }}>
            Nama Lengkap
          </label>
          <input type="text" style={{
            width: '100%',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '15px'
          }} />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Tempat Lahir
            </label>
            <input type="text" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Tanggal Lahir
            </label>
            <input type="date" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#333'
          }}>
            Alamat
          </label>
          <textarea style={{
            width: '100%',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '15px',
            minHeight: '100px'
          }} />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Nomor HP
            </label>
            <input type="tel" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Email
            </label>
            <input type="email" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
        </div>
      </div>

      {/* Document Information Section */}
      <div>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a',
          marginBottom: '15px'
        }}>
          Informasi Dokumen
        </h2>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Nomor KTP
            </label>
            <input type="text" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              NPWP
            </label>
            <input type="text" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Nomor Sertifikat Kompetensi
            </label>
            <input type="text" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Nomor Rekening
            </label>
            <input type="text" style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px'
            }} />
          </div>
        </div>

        {/* Document Upload Sections */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#333'
          }}>
            KTP
          </label>
          <div style={{
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '15px'
          }}>
            <p style={{ color: '#666', fontSize: '14px' }}>Upload KTP</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#333'
          }}>
            Buku Tabungan
          </label>
          <div style={{
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '15px'
          }}>
            <p style={{ color: '#666', fontSize: '14px' }}>Upload Buku Tabungan</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500',
            color: '#333'
          }}>
            Sertifikat Kompetensi
          </label>
          <div style={{
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666', fontSize: '14px' }}>Upload Sertifikat Kompetensi</p>
          </div>
        </div>

        {/* Save Button */}
        <button style={{
          backgroundColor: '#ff6b35',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '30px',
          width: '100%',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e05a2b'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}


// DASHBOARD UTAMA (menggunakan sidebar component)
function Dashboard({ onBack, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const handleMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
        if (onBack) onBack();
      }
      return;
    }
    
    if (menuName === 'ListAsesmen' && onNavigate) {
      onNavigate('listasesmen');
      return;
    }
    
    setActiveMenu(menuName);
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      height: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Sidebar - Fixed */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        height: '100vh', // Full height
        zIndex: 10
      }}></div>
      {/* Pakai DashboardSidebar component */}
      <DashboardSidebar 
        activeMenu={activeMenu} 
        onMenuClick={handleMenuClick} 
      />

      {/* Main Content */}
      {/* Main Content - Scrollable */}
      <div style={{ 
        flex: 1,
        overflowY: 'auto', // Scroll hanya di konten utama
        padding: '20px',
        backgroundColor: '#fafafa'
      }}>
        {/* Konten berdasarkan activeMenu */}
        {activeMenu === 'Dashboard' && (
          <div style={{ textAlign: 'center', minHeight: 'calc(100vh - 40px)' }}>
            <h1 style={{
              fontSize: '6rem',
              fontWeight: '900',
              color: '#1a1a1a',
              margin: 0,
              letterSpacing: '-0.02em',
              fontFamily: 'Georgia, serif'
            }}>
              Halo Sobat!
            </h1>
          </div>
        )}

        {activeMenu === 'ManajemenData' && (
          <ManajemenData onNavigate={onNavigate} />
        )}
        
        {activeMenu === 'AsesmenDiikuti' && <AsesmenDiikuti />}
        
        {activeMenu === 'Profile' && <ProfileSection />}
      </div>
    </div>
  
  );
}

export default Dashboard;