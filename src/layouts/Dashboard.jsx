import { useState } from "react";
import ManajemenData from "./ManajemenData";
import ListAsesmen from "./ListAsesmen";
import AsesmenDiikuti from "./AsesmenDiikuti";
import logoImage from "/src/img/image 12.png";

// KOMPONEN SIDEBAR YANG BISA DI-EXPORT (seperti Navbar)
export function DashboardSidebar({ activeMenu, onMenuClick }) {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        margin: "15px",
        height: "calc(100vh - 30px)",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          padding: "20px 30px",
          marginBottom: "30px",
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            marginBottom: "15px",
          }}
        >
          <img
            src={logoImage}
            alt="LSP Logo"
            style={{
              width: "200%",
              height: "200%",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </div>
        <h3
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#1a1a1a",
          }}
        ></h3>
      </div>

      {/* Menu Items */}
      <div style={{ flex: 1, paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Dashboard Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "Dashboard" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "Dashboard" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("Dashboard")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Dashboard") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Dashboard") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12H15V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Dashboard</span>
        </div>

        {/* Manajemen Data Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "ManajemenData" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "ManajemenData" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("ManajemenData")}
          onMouseEnter={(e) => {
            if (activeMenu !== "ManajemenData") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "ManajemenData") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            Manajemen data
          </span>
        </div>

        {/* List Asesmen Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "ListAsesmen" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "ListAsesmen" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("ListAsesmen")}
          onMouseEnter={(e) => {
            if (activeMenu !== "ListAsesmen") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "ListAsesmen") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <line
              x1="8"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="8"
              y1="12"
              x2="21"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="8"
              y1="18"
              x2="21"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="6"
              x2="3.01"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="12"
              x2="3.01"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="18"
              x2="3.01"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            List Asesmen
          </span>
        </div>

        {/* Asesmen Diikuti Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "AsesmenDiikuti" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "AsesmenDiikuti" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("AsesmenDiikuti")}
          onMouseEnter={(e) => {
            if (activeMenu !== "AsesmenDiikuti") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "AsesmenDiikuti") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            Asesmen Diikuti
          </span>
        </div>
      </div>

      {/* Bottom Menu Items */}
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          borderTop: "1px solid #f0f0f0",
          paddingTop: "20px",
        }}
      >
        {/* Profile Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "Profile" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "Profile" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("Profile")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Profile") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Profile") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Profile</span>
        </div>

        {/* Logout Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "#666",
          }}
          onClick={() => onMenuClick("Logout")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f8f9fa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="16,17 21,12 16,7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="21"
              y1="12"
              x2="9"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Log out</span>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    padding: '20px',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#333'
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '30px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600' }}>PROFIL ANDA</h1>
        <p style={{ color: '#666' }}>Lengkapi informasi profil anda</p>
      </div>

      {/* Foto Profil */}
<div style={cardStyle}>
  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Foto Profil</h2>
  
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    border: '2px dashed #e0e0e0',
    borderRadius: '12px',
    padding: '20px'
  }}>
    {/* Icon Camera */}
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}>
      <img src="/icons/camera.svg" alt="Camera" style={{ width: '40px', height: '40px' }} />
      
      {/* Icon kecil di pojok bawah */}
      <div style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        backgroundColor: '#ff6b35',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="white" 
        viewBox="0 0 24 24" 
        width="14px" 
        height="14px"
      >
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-2c.828 0 1.58.335 2.121.879l.879.879H18a2 2 0 0 1 2 2v8a2 
             2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3l.879-.879A3 3 0 0 1 12 5z"/>
    </svg>
      </div>
    </div>

    {/* Text Upload */}
    <div>
      <p style={{ fontWeight: '500', marginBottom: '5px' }}>Upload Foto Profil</p>
      <p style={{ fontSize: '14px', color: '#666' }}>Format PNG, JPG, Maksimal 2MB</p>
    </div>
  </div>
</div>

      {/* Informasi Pribadi */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Informasi Pribadi</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <input type="text" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tempat Lahir</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tanggal Lahir</label>
            <input type="date" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Alamat</label>
          <textarea style={{ ...inputStyle, minHeight: '100px' }} />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor HP</label>
            <input type="tel" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Card Informasi Dokumen */}
        <div style={cardStyle}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>Informasi Dokumen</h2>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Nomor KTP</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>NPWP</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Nomor Sertifikat Kompetensi</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Nomor Rekening</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
        </div>


        {/* Upload Dokumen dalam satu baris */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          
          {/* Card KTP */}
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            <label style={{ fontWeight: '600', marginBottom: '10px', display: 'block' }}>KTP</label>
            <div style={{
              border: '2px dashed #e0e0e0',
              borderRadius: '12px',
              padding: '45px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#666', fontSize: '14px' }}>Upload KTP</p>
            </div>
          </div>

          {/* Card Buku Tabungan */}
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            <label style={{ fontWeight: '600', marginBottom: '10px', display: 'block' }}>Buku Tabungan</label>
            <div style={{
              border: '2px dashed #e0e0e0',
              borderRadius: '12px',
              padding: '45px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#666', fontSize: '14px' }}>Upload Buku Tabungan</p>
            </div>
          </div>

          {/* Card Sertifikat Kompetensi */}
          <div style={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            <label style={{ fontWeight: '600', marginBottom: '10px', display: 'block' }}>Sertifikat Kompetensi</label>
            <div style={{
              border: '2px dashed #e0e0e0',
              borderRadius: '12px',
              padding: '35px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#666', fontSize: '14px' }}>Upload Sertifikat Kompetensi</p>
            </div>
          </div>
        </div>


        {/* Tombol Simpan */}
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
  );
}

// DASHBOARD UTAMA (menggunakan sidebar component)
function Dashboard({ onBack, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menuName) => {
    if (menuName === "Logout") {
      if (confirm("Apakah Anda yakin ingin logout?")) {
        alert("Logout berhasil!");
        if (onBack) onBack();
      }
      return;
    }

    if (menuName === "ListAsesmen" && onNavigate) {
      onNavigate("listasesmen");
      return;
    }

    setActiveMenu(menuName);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        height: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Sidebar - Fixed */}
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100vh", // Full height
          zIndex: 10,
        }}
      ></div>
      {/* Pakai DashboardSidebar component */}
      <DashboardSidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />

      {/* Main Content */}
      {/* Main Content - Scrollable */}
      <div
        style={{
          flex: 1,
          overflowY: "auto", // Scroll hanya di konten utama
          padding: "20px",
          backgroundColor: "#fafafa",
        }}
      >
        {/* Konten berdasarkan activeMenu */}

        {activeMenu === "Dashboard" && (
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "6rem",
                fontWeight: "900",
                color: "#1a1a1a",
                margin: 0,
                letterSpacing: "-0.02em",
                fontFamily: "Georgia, serif",
              }}
            ></h1>
          </div>
        )}

        {activeMenu === "Dashboard" && (
          <div
            style={{
              flex: 1,
              padding: "30px",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Header Section */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    margin: "0 0 8px 0",
                  }}
                >
                  Halo, Ayu Saf
                </h1>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  Selamat datang di panel administrasi asesmen
                </p>
              </div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#ff6b35",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                </svg>
              </div>
            </div>

            {/* Statistics Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {/* Jumlah Asesoi */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#ff6b35",
                      borderRadius: "6px",
                      marginRight: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Jumlah Asesoi
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                  }}
                >
                  20
                </div>
              </div>

              {/* Jumlah Asesi */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#ffd700",
                      borderRadius: "6px",
                      marginRight: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
                    </svg>
                  </div>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Jumlah Asesi
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                  }}
                >
                  2,000
                </div>
              </div>

              {/* Jumlah Skema */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#32c5ff",
                      borderRadius: "6px",
                      marginRight: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
                      <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" />
                    </svg>
                  </div>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Jumlah Skema
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                  }}
                >
                  23
                </div>
              </div>
            </div>

            {/* List Assessment Section */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#ff6b35",
                    borderRadius: "6px",
                    marginRight: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  List Assessment
                </h2>
              </div>

              {/* Assessment Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  {
                    batch: "TKJ Batch 12",
                    date: "16 Agustus 2025",
                    time: "00:00 - 01:00",
                    location: "Kampung Raya",
                    participants: "TKJ24",
                  },
                  {
                    batch: "TKJ Batch 12",
                    date: "16 Agustus 2025",
                    time: "00:00 - 01:00",
                    location: "Kampung Raya",
                    participants: "TKJ24",
                  },
                ].map((assessment, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      backgroundColor: "#fafafa",
                      borderRadius: "12px",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", flex: 1 }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          marginRight: "16px",
                          minWidth: "120px",
                        }}
                      >
                        Asesmen {assessment.batch}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#ff6b35"
                            style={{ marginRight: "6px" }}
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {assessment.date}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#ffd700"
                            style={{ marginRight: "6px" }}
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12,6 12,12 16,14" />
                          </svg>
                          {assessment.time}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#32c5ff"
                            style={{ marginRight: "6px" }}
                          >
                            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {assessment.location}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#ff6b35"
                            style={{ marginRight: "6px" }}
                          >
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          {assessment.participants}
                        </div>
                      </div>
                    </div>

                    <button
                      style={{
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        fontSize: "12px",
                        color: "#666",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e9ecef";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                      }}
                    >
                      Detail
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeMenu === "ManajemenData" && (
          <ManajemenData onNavigate={onNavigate} />
        )}

        {activeMenu === "AsesmenDiikuti" && <AsesmenDiikuti />}

        {activeMenu === "Profile" && <ProfileSection />}
      </div>
    </div>
  );
}

export default Dashboard;
