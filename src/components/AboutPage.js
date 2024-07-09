import React from 'react';

const AboutPage = () => {
  return (
    <div
      id="about"
      className="bg-[#E7EFFF] min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #E7EFFF, #FFFFFF)',
      }}
    >
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mt-10 text-[#262642]">
          Tentang <span className="text-[#1A73E8]">Kami</span>
        </h1>
        <div className="mt-10 bg-white rounded-lg p-8 shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#262642]">
            Klasifikasi Jenis Ikan Berdasarkan Ukuran
          </h2>
          <hr className="w-full border-b-2 border-[#262642] mx-auto mb-4" />
          <p className="text-lg text-justify mb-4">
            Ikan dapat diklasifikasikan berdasarkan ukurannya yang bervariasi. Ukuran ikan merupakan indikator penting untuk memahami perbedaan antar spesies. Di Indonesia, ikan dapat ditemukan dalam berbagai bentuk, warna, dan habitat. Secara umum, ikan air tawar seperti ikan mas dan ikan lele yang hidup di sungai dan danau cenderung memiliki ukuran yang lebih kecil dibandingkan dengan ikan air laut seperti ikan tuna dan ikan kakap yang sering ditemukan di laut lepas dengan ukuran yang lebih besar. Perbedaan ini mencerminkan adaptasi ikan terhadap lingkungan hidupnya, serta memengaruhi peran ekologis dan keberlanjutan populasi mereka di alam.
          </p>
          <hr className="w-full border-b-2 border-[#262642] mx-auto mb-4" />
          <p className="text-lg text-justify">
            Teknologi klasifikasi saat ini dapat dimanfaatkan untuk membantu pengguna dalam melakukan klasifikasi jenis ikan berdasarkan ukurannya dan teknologi ini akan terus berkembang untuk melakukan klasifikasi yang lebih sulit.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
