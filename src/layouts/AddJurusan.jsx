import React, { useState } from 'react';

function AddJurusan({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    kompetensiKeahlian: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.kompetensiKeahlian.trim()) {
      newErrors.kompetensiKeahlian = 'Kompetensi keahlian harus diisi';
    }
    
    if (!formData.jumlahSiswa.trim()) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus diisi';
    } else if (isNaN(formData.jumlahSiswa) || parseInt(formData.jumlahSiswa) < 0) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus berupa angka positif';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newItem = {
        id: Date.now(),
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
      };
      
      // Tampilkan notifikasi dulu
      setShowSuccess(true);
      
      // Baru panggil onSave dan reset form setelah delay
      setTimeout(() => {
        onSave && onSave(newItem);
        setFormData({
          kompetensiKeahlian: '',
          jumlahSiswa: ''
        });
      }, 100);
    }
  };

  // SVG Checkmark Icon Component
  const CheckmarkIcon = () => (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="#4A90E2" 
        strokeWidth="4" 
        fill="none"
        style={{
          strokeDasharray: '283',
          strokeDashoffset: showSuccess ? '0' : '283',
          transition: 'stroke-dashoffset 0.5s ease-in-out',
          transform: 'rotate(-90deg)',
          transformOrigin: '50px 50px'
        }}
      />
      {/* Checkmark */}
      <path 
        d="M30 50L42 62L70 34" 
        stroke="#4A90E2" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{
          strokeDasharray: '50',
          strokeDashoffset: showSuccess ? '0' : '50',
          transition: 'stroke-dashoffset 0.3s ease-in-out 0.3s'
        }}
      />
    </svg>
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#f5f5f5',
      zIndex: 9999
    }}>
      {/* Notifikasi Sukses - Design Baru */}
      {showSuccess && (
        <>
          {/* Overlay dengan animasi fade */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 10000,
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Modal Notifikasi */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px 40px 40px 40px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            textAlign: 'center',
            zIndex: 10001,
            width: '320px',
            maxWidth: '90vw',
            animation: 'slideUp 0.4s ease-out'
          }}>
            {/* Icon Checkmark Animasi */}
            <div style={{ marginBottom: '25px' }}>
              <CheckmarkIcon />
            </div>
            
            {/* Text */}
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '8px',
              letterSpacing: '-0.5px'
            }}>
              Data Berhasil
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              letterSpacing: '-0.5px'
            }}>
              Ditambahkan
            </div>
            
            {/* Button */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowSuccess(false);
                
                // Baru panggil onSave dan reset form
                if (window.tempData) {
                  onSave && onSave(window.tempData);
                  window.tempData = null;
                }
                
                setFormData({
                  kompetensiKeahlian: '',
                  jumlahSiswa: ''
                });
              }}
              style={{
                backgroundColor: '#4A90E2',
                color: 'white',
                border: 'none',
                padding: '14px 40px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
                minWidth: '120px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#357ABD';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4A90E2';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
              }}
            >
              Okay!
            </button>
          </div>
        </>
      )}

      {/* Header */}
      <div style={{
        padding: '40px 0 20px 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          margin: 0
        }}>
          TAMBAHKAN DATA BARU
        </h1>
      </div>

      {/* Form Container */}
      <div style={{
        margin: '0 20px',
        backgroundColor: 'white',
        borderRadius: '30px 30px 0 0',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Form Input */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Kompetensi Keahlian
            </label>
            <input
              type="text"
              name="kompetensiKeahlian"
              value={formData.kompetensiKeahlian}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.kompetensiKeahlian && (
              <p style={{ color: 'red', marginTop: '8px', fontSize: '14px' }}>
                {errors.kompetensiKeahlian}
              </p>
            )}
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Jumlah Siswa
            </label>
            <input
              type="number"
              name="jumlahSiswa"
              value={formData.jumlahSiswa}
              onChange={handleInputChange}
              min="0"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
            {errors.jumlahSiswa && (
              <p style={{ color: 'red', marginTop: '8px', fontSize: '14px' }}>
                {errors.jumlahSiswa}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '40px'
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Batal
          </button>
          <button
            onClick={() => {
              if (validateForm()) {
                const newItem = {
                  id: Date.now(),
                  kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
                  jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
                };
                
                // Simpan data ke state sementara
                window.tempData = newItem;
                
                // Tampilkan notifikasi
                setShowSuccess(true);
              }
            }}
            style={{
              backgroundColor: '#fd7e14',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e8690c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#fd7e14'}
          >
            Simpan Data
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
}

export default AddJurusan;