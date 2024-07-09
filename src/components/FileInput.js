import React, { useState } from 'react';
import { scroller } from 'react-scroll';

const FileInput = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [hasil, setHasil] = useState('');
  const [description, setDescription] = useState('');

  const descriptions = {
    kecil: (
      <>
        <h3 className="text-center">Ikan Kecil</h3>
        <ul className="text-center">
          <li>Tubuh yang kecil</li>
          <li>Pola yang mencolok</li>
          <li>Habitat sungai, danau, kolam</li>
          <li>Hidup dalam kelompok</li>
        </ul>
      </>
    ),
    sedang: (
      <>
        <h3 className="text-center">Ikan Sedang</h3>
        <ul className="text-center">
          <li>Tubuh yang sedang</li>
          <li>Pola yang bervariasi</li>
          <li>Habitat laut dangkal</li>
        </ul>
      </>
    ),
    besar: (
      <>
        <h3 className="text-center">Ikan Besar</h3>
        <ul className="text-center">
          <li>Tubuh yang besar</li>
          <li>Gelap atau bercorak</li>
          <li>Habitat lautan terbuka</li>
          <li>Bau sangat amis</li>
          <li>Warna kulit kusam</li>
        </ul>
      </>
    ),
    default: 'Tidak Terdeteksi'
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
    if (typeof onFileChange === 'function') {
      onFileChange(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const apiUrl = 'https://b46d-34-147-15-187.ngrok-free.app/predict';

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json); // Log response for debugging

      if (json.success) {
        setStatus('File berhasil diproses!');
      } else {
        setStatus('File gagal diproses!');
      }

      setConfidence(json.confidence);
      let hasilLabel = 'default';
      switch (json.label) {
        case 0:
          hasilLabel = 'kecil';
          break;
        case 1:
          hasilLabel = 'sedang';
          break;
        case 2:
          hasilLabel = 'besar';
          break;
        default:
          hasilLabel = 'default';
      }
      setHasil(hasilLabel);
      setDescription(descriptions[hasilLabel]);

      scroller.scrollTo('prediction-results', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus('File gagal diproses!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10" id="upload-section">
      <h1 className="text-4xl font-bold text-center mb-4">
        Silahkan <span className="text-blue-500">Upload File</span> Untuk <span className="text-pink-500">Proses Data</span>
      </h1>
      <div className="flex justify-center items-start w-full max-w-5xl">
        <div className="w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium mb-4">Upload disini!</p>
            <input
              id="file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="w-full flex justify-center items-center border border-gray-300 p-2 rounded-lg cursor-pointer">
              <span className="text-gray-600">{selectedFile ? selectedFile.name : 'Choose File'}</span>
            </label>
            {selectedFile && (
              <button
                className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold py-2 px-4 rounded-full mt-4"
                onClick={handleUpload}
              >
                Upload
              </button>
            )}
          </div>
        </div>
        <div className="w-1/2 p-4" id="prediction-results">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-center mb-4">Hasil Prediksi</h2>
            {status && (
              <div className="mt-4 text-center">
                <p>{status}</p>
              </div>
            )}
            {imageUrl && (
              <div className="mt-4 text-center">
                <img src={imageUrl} alt="Selected file" className="w-full h-auto rounded-lg" />
                <div className="mt-4 text-center">
                  <p className="text-sm mt-2">Hasil: {hasil}</p>
                  <p className="text-sm mt-2">Confidence: {confidence}</p>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
