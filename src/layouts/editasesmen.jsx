import React, { useState } from 'react';

function EditAsesmen({ onBack, onSave, asesmen }) {
  const [judul, setJudul] = useState(asesmen?.judul || '');
  const [program, setProgram] = useState(asesmen?.program || '');
  const [tanggal, setTanggal] = useState(asesmen?.tanggal || '');

  const handleSave = () => {
    if (judul && program && tanggal) {
      onSave && onSave({ ...asesmen, judul, program, tanggal });
      onBack && onBack();
    } else {
      alert('Harap isi semua field!');
    }
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <button onClick={onBack} style={backBtnStyle}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={titleStyle}>Edit Asesmen</h1>
      </div>

      {/* Form */}
      <div style={formGroup}>
        <label style={labelStyle}>Judul Asesmen</label>
        <input style={inputStyle} value={judul} onChange={(e) => setJudul(e.target.value)} />
      </div>
      <div style={formGroup}>
        <label style={labelStyle}>Program</label>
        <input style={inputStyle} value={program} onChange={(e) => setProgram(e.target.value)} />
      </div>
      <div style={formGroup}>
        <label style={labelStyle}>Tanggal Dibuat</label>
        <input type="date" style={inputStyle} value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
      </div>

      {/* Save Button */}
      <button style={saveBtnStyle} onClick={handleSave}>Simpan Perubahan</button>
    </div>
  );
}

const containerStyle = { minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '16px', fontFamily: 'Segoe UI, Roboto, sans-serif' };
const headerStyle = { display: 'flex', alignItems: 'center', marginBottom: '16px' };
const backBtnStyle = { width: '24px', height: '24px', backgroundColor: '#4a9eff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', border: 'none', cursor: 'pointer', padding: 0 };
const titleStyle = { fontSize: '18px', fontWeight: '700', color: '#333', margin: 0 };
const formGroup = { marginBottom: '12px' };
const labelStyle = { display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '4px' };
const inputStyle = { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '13px' };
const saveBtnStyle = { backgroundColor: '#ff9500', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 12px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' };

export default EditAsesmen;
