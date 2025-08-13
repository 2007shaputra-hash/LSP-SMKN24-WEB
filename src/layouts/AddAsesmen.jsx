import React, { useState } from 'react';

function AddAsesmen({ onSave, onCancel }) {
  const [judul, setJudul] = useState('');
  const [program, setProgram] = useState('');
  const [tanggal, setTanggal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsesmen = {
      judul,
      program,
      tanggal
    };
    onSave && onSave(newAsesmen);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '16px', 
      backgroundColor: '#f0f0f0',
      fontFamily: 'Segoe UI, Roboto, sans-serif'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          marginBottom: '24px', 
          color: '#333',
          fontSize: '20px',
          fontWeight: '600'
        }}>
          Tambah Asesmen Baru
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Judul Asesmen:
            </label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              required
              placeholder="Masukkan judul asesmen"
            />
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Program:
            </label>
            <input
              type="text"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              required
              placeholder="Masukkan program"
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Tanggal Dibuat:
            </label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              style={{ 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              required
            />
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              type="submit" 
              style={{ 
                backgroundColor: '#4caf50', 
                color: 'white', 
                padding: '12px 24px', 
                border: 'none', 
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                flex: 1
              }}
            >
              Simpan
            </button>
            <button 
              type="button" 
              onClick={onCancel} 
              style={{ 
                backgroundColor: '#f5f5f5',
                color: '#333',
                padding: '12px 24px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                flex: 1
              }}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAsesmen;
