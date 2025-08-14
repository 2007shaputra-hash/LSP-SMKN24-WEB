import React from 'react';

const JadwalAsesmen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Breadcrumb */}
      <div className="bg-orange-500 px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-white text-sm">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span>Jadwal Asesmen</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-2">SKEMA SERTIFIKASI</p>
          <h1 className="text-3xl font-bold text-gray-800">JADWAL ASESMEN</h1>
        </div>

        {/* Search Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-48">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Skema</option>
            </select>
          </div>
          <div className="flex-1 min-w-48">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Jadwal</option>
            </select>
          </div>
          <div className="flex-1 min-w-48">
            <input 
              type="text" 
              placeholder="Cari..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium">
              Cari
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Lokasi: Lorem ipsum</p>
                <p>Tanggal: 00/MM/YY</p>
                <p>Waktu: 00.00</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-2 rounded-full font-medium">
                Daftar
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Lokasi: Lorem ipsum</p>
                <p>Tanggal: 00/MM/YY</p>
                <p>Waktu: 00.00</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-2 rounded-full font-medium">
                Daftar
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Lokasi: Lorem ipsum</p>
                <p>Tanggal: 00/MM/YY</p>
                <p>Waktu: 00.00</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-2 rounded-full font-medium">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalAsesmen;