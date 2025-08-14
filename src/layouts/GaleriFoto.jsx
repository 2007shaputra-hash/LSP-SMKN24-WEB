import React, { useState } from 'react';

function GaleriFoto({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data contoh foto galeri
  const galleryImages = [
    {
      id: 1,
      src: 'src/img/lab.png',
      alt: 'Seminar Teknologi Informasi',
      title: 'Seminar Nasional Teknologi Informasi',
      description: 'Acara seminar nasional yang diselenggarakan oleh LSP',
      date: '27 Januari 2025'
    },
    {
      id: 2,
      src: 'src/img/kenapakami.jpg',
      alt: 'Workshop Sertifikasi',
      title: 'Workshop Sertifikasi Web Developer',
      description: 'Pelatihan intensif pengembangan web untuk peserta sertifikasi',
      date: '15 Februari 2025'
    },
    {
      id: 3,
      src: 'src/img/kontak.png',
      alt: 'Asesmen Kompetensi',
      title: 'Pelaksanaan Asesmen Kompetensi',
      description: 'Kegiatan asesmen kompetensi bidang IT',
      date: '20 Februari 2025'
    },
    {
      id: 4,
      src: 'src/img/lsp.png',
      alt: 'Penyerahan Sertifikat',
      title: 'Penyerahan Sertifikat Kompetensi',
      description: 'Acara penyerahan sertifikat kepada peserta yang lulus',
      date: '25 Februari 2025'
    },
    {
      id: 5,
      src: 'src/img/smk.png',
      alt: 'Rapat Koordinasi',
      title: 'Rapat Koordinasi LSP',
      description: 'Rapat koordinasi tim LSP membahas program kerja',
      date: '1 Maret 2025'
    },
    {
      id: 6,
      src: 'src/img/dibutuhkan.png',
      alt: 'Pelatihan Asesor',
      title: 'Pelatihan Asesor Baru',
      description: 'Pelatihan untuk asesor baru LSP',
      date: '5 Maret 2025'
    },
   
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <button
            onClick={onBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF8303',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e6750a'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF8303'}
          >
            ← Kembali
          </button>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              margin: 0,
              color: '#333'
            }}>
              Galeri Foto
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: '5px 0 0 0'
            }}>
              Dokumentasi kegiatan dan acara LSP
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#888',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Placeholder untuk gambar */}
               <img 
  src={image.src} 
  alt={image.alt} 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }} 
/>

              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                  color: '#333'
                }}>
                  {image.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: '0 0 8px 0',
                  lineHeight: '1.4'
                }}>
                  {image.description}
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#FF8303',
                  fontWeight: '500'
                }}>
                  {image.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ←
            </button>

            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              →
            </button>

            {/* Image */}
            <div style={{
              width: '600px',
              height: '400px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '72px'
              }}>
                📷
              </div>
            </div>

            {/* Image Info */}
            <div style={{ padding: '20px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                margin: '0 0 10px 0',
                color: '#333'
              }}>
                {selectedImage.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666',
                margin: '0 0 10px 0',
                lineHeight: '1.5'
              }}>
                {selectedImage.description}
              </p>
              <div style={{
                fontSize: '14px',
                color: '#FF8303',
                fontWeight: '500'
              }}>
                📅 {selectedImage.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GaleriFoto;