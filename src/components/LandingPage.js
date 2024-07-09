import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bgld from '../assets/bgld.png';
import { Element, scroller } from 'react-scroll';
import '../index.css';

const LandingPage = () => {
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 1000,
            delay: 100,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <Element name="landing-page" className="bg-[#FFF8F0] min-h-screen flex flex-col items-center justify-center relative">
            <img src={bgld} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center relative z-10">
                <div className="lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
                    <div>
                        <h1 className="font-bold mb-4 text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                            Klasifikasi Jenis <br /> ikan Berdasarkan<br />Ukuran
                        </h1>
                        <button
                            onClick={() => scrollToSection('upload-section')}
                            className="mt-4 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white animated-button"
                        >
                            Proses Data
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-sm lg:max-w-lg">
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            autoPlay={true}
                            interval={3000}
                            stopOnHover={false}
                            className="h-auto"
                        >
                            {/* Add your carousel items here */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default LandingPage;
