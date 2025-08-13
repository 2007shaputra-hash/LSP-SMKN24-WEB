import React, { useState, useEffect } from 'react';

function EditJurusan({ onBack, onSave, onDelete, initialData }) {
  const [formData, setFormData] = useState({
    kompetensiKeahlian: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Load initial data when component mounts
  useEffect(() => {
    if (initialData) {
      setFormData({
        kompetensiKeahlian: initialData.kompetensiKeahlian || '',
        jumlahSiswa: initialData.jumlahSiswa || ''
      });
    }
  }, [initialData]);

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
      const updatedItem = {
        ...initialData,
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
      };
      
      // Simpan data ke state sementara
      window.tempUpdateData = updatedItem;
      
      // Tampilkan notifikasi
      setShowSuccess(true);
    }
  };

  const handleDelete = () => {
    // Tampilkan notifikasi konfirmasi custom
    setShowDeleteConfirm(true);
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
          strokeDashoffset: (showSuccess || showDeleteSuccess) ? '0' : '283',
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
          strokeDashoffset: (showSuccess || showDeleteSuccess) ? '0' : '50',
          transition: 'stroke-dashoffset 0.3s ease-in-out 0.3s'
        }}
      />
    </svg>
  );

  // SVG Warning Icon Component
  const WarningIcon = () => (
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
        fill="#FF4757" 
        style={{
          animation: showDeleteConfirm ? 'pulseRed 0.6s ease-out' : 'none'
        }}
      />
      {/* Exclamation mark */}
      <path 
        d="M50 25V55" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
        style={{
          strokeDasharray: '30',
          strokeDashoffset: showDeleteConfirm ? '0' : '30',
          transition: 'stroke-dashoffset 0.3s ease-in-out 0.2s'
        }}
      />
      <circle 
        cx="50" 
        cy="70" 
        r="4" 
        fill="white"
        style={{
          opacity: showDeleteConfirm ? '1' : '0',
          transition: 'opacity 0.2s ease-in-out 0.4s'
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
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      zIndex: 9999
    }}>
      {/* Notifikasi Konfirmasi Delete */}
      {showDeleteConfirm && (
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
          
          {/* Modal Konfirmasi */}
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
            {/* Icon Warning Animasi */}
            <div style={{ marginBottom: '25px' }}>
              <WarningIcon />
            </div>
            
            {/* Text */}
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '8px',
              letterSpacing: '-0.5px'
            }}>
              Anda Yakin
            </div>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              letterSpacing: '-0.5px'
            }}>
              Menghapus Data Ini?
            </div>
            
            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => {
                  // Tutup konfirmasi
                  setShowDeleteConfirm(false);
                  
                  // Simpan id untuk delete
                  window.tempDeleteId = initialData.id;
                  
                  // Tampilkan notifikasi sukses delete
                  setShowDeleteSuccess(true);
                }}
                style={{
                  backgroundColor: '#FF4757',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minWidth: '90px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#ff3742';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#FF4757';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Lanjutkan
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minWidth: '90px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#5a6268';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#6c757d';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </>
      )}

      {/* Notifikasi Sukses Update */}
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
              Data Anda
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '30px',
              letterSpacing: '-0.5px'
            }}>
              Diperbarui!
            </div>
            
            {/* Button */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowSuccess(false);
                
                // Baru panggil onSave
                if (window.tempUpdateData) {
                  onSave && onSave(window.tempUpdateData);
                  window.tempUpdateData = null;
                }
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

      {/* Notifikasi Sukses Delete */}
      {showDeleteSuccess && (
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
              Dihapus!
            </div>
            
            {/* Button */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowDeleteSuccess(false);
                
                // Baru panggil onDelete
                if (window.tempDeleteId) {
                  onDelete && onDelete(window.tempDeleteId);
                  window.tempDeleteId = null;
                }
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
          margin: '0',
          letterSpacing: '1px'
        }}>
          EDIT DATA
        </h1>
      </div>

      {/* Form Container */}
      <div style={{
        margin: '0 20px 0 20px',
        backgroundColor: '#ffffff',
        borderRadius: '30px 30px 0 0',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        minHeight: 'calc(100vh - 100px)',
        height: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Form Content */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {/* Kompetensi Keahlian */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Kompetensi Keahlian
            </label>
            <input
              type="text"
              name="kompetensiKeahlian"
              value={formData.kompetensiKeahlian}
              onChange={handleInputChange}
              placeholder=""
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.kompetensiKeahlian && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
                {errors.kompetensiKeahlian}
              </p>
            )}
          </div>

          {/* Jumlah Siswa */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Jumlah Siswa
            </label>
            <input
              type="number"
              name="jumlahSiswa"
              value={formData.jumlahSiswa}
              onChange={handleInputChange}
              placeholder=""
              min="0"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.jumlahSiswa && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
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
          marginTop: 'auto',
          paddingTop: '40px'
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6c757d',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#5a6268';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6c757d';
            }}
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: '#dc3545',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#c82333';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#dc3545';
            }}
          >
            Hapus Data
          </button>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            Simpan Perubahan
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
        
        @keyframes pulseRed {
          0% { 
            transform: scale(0.8);
            opacity: 0;
          }
          50% { 
            transform: scale(1.1);
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default EditJurusan;