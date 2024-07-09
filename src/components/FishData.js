import React from 'react';
import ikankecil from '../assets/ikankecil.png';
import ikansedang from '../assets/ikansedang.png';
import ikanbesar from '../assets/ikanbesar.png';

const FishData = () => {
    const fishTypes = [
        {
            title: 'Ikan Kecil',
            img: ikankecil,
            details: [
                'Tubuh yang kecil',
                'Pola yang mencolok',
                'Habitat sungai, danau, kolam',
                'Hidup dalam kelompok',
            ],
            backgroundColor: '#d0f0fd', // Light blue
        },
        {
            title: 'Ikan Sedang',
            img: ikansedang,
            details: [
                'Tubuh yang sedang',
                'Pola yang bervariasi',
                'Habitat laut dangkal',
            ],
            backgroundColor: '#f8f8c9', // Light yellow
        },
        {
            title: 'Ikan Besar',
            img: ikanbesar,
            details: [
                'Tubuh yang besar',
                'Gelap atau bercorak',
                'Habitat lautan terbuka',
                'Bau sangat amis',
                'Warna kulit kusam',
            ],
            backgroundColor: '#ffd1dc', // Light pink
        },
    ];

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#E7EFFF',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif', // Added a font-family for overall styling
        },
        title: {
            fontSize: '2.5em',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#333', // Darker color for better contrast
        },
        subtitle: {
            fontSize: '1.8em',
            marginBottom: '20px',
            color: '#007BFF', // Blue color for subtitle
            fontStyle: 'italic', // Italicized subtitle for better appearance
        },
        fishCards: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
        },
        card: {
            borderRadius: '15px',
            padding: '20px',
            width: '280px', // Increased width for better appearance
            textAlign: 'center',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // More prominent shadow
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for hover effect
            backgroundColor: 'white', // Added background color for better contrast
        },
        cardHover: {
            transform: 'translateY(-10px)', // Slightly lift the card on hover
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
        },
        cardImageContainer: {
            borderRadius: '10px',
            width: '100%',
            height: '150px', // Increased height for better appearance
            overflow: 'hidden',
            marginBottom: '10px',
            position: 'relative',
        },
        cardImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        cardTitle: {
            fontSize: '1.5em',
            marginBottom: '10px',
            color: '#333',
            fontWeight: 'bold', // Bold font for card titles
        },
        cardDetails: {
            textAlign: 'left',
            fontSize: '1em',
            color: '#555', // Slightly darker gray for better readability
        },
        cardDetailItem: {
            margin: '5px 0',
            color: '#666',
        },
    };

    return (
        <div id="fish-data" style={styles.container}>
            <h2 style={styles.title}>Data Training & Data Testing</h2>
            <h3 style={styles.subtitle}>Label Ikan</h3>
            <div style={styles.fishCards}>
                {fishTypes.map((fish, index) => (
                    <div
                        style={{ ...styles.card, backgroundColor: fish.backgroundColor }}
                        key={index}
                        className="hover:transform hover:translate-y-[-10px] hover:shadow-lg transition-transform"
                    >
                        <div style={styles.cardImageContainer}>
                            <img src={fish.img} alt={fish.title} style={styles.cardImage} />
                        </div>
                        <h4 style={styles.cardTitle}>{fish.title}</h4>
                        <div style={styles.cardDetails}>
                            {fish.details.map((detail, detailIndex) => (
                                <p style={styles.cardDetailItem} key={detailIndex}>- {detail}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FishData;
