import React, { useState } from 'react';
import yogaa from '../assets/yogaa.png'; 
import oranganeh from '../assets/oranganeh.png'; 
import ricky from '../assets/ricky.jpeg'; 

const Biodata = () => {
    const teamMembers = [
        {
            name: 'Yoga Hermanda',
            id: '2257301135',
            role: 'Back End',
            img: yogaa, 
        },
        {
            name: 'Ricky Lee',
            id: '1957301026',
            role: 'Front End',
            img: ricky, 
        },
        
    ];

    const [hoveredMember, setHoveredMember] = useState(null);

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#FFFFFF',
            position: 'relative', // Add position relative for arrow positioning
        },
        title: {
            fontSize: '2em',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        subtitle: {
            fontSize: '1.5em',
            marginBottom: '20px',
        },
        teamCards: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
        },
        card: {
            backgroundColor: '#ADD8E6', // Change this value to your desired color
            borderRadius: '15px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease',
            marginRight: '20px',
        },
        cardImageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            marginBottom: '10px',
        },
        cardImage: {
            borderRadius: '50%',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            width: '150px',
            height: '150px',
        },
        cardInfo: {
            marginTop: '10px',
            transition: 'opacity 0.3s ease',
            opacity: '1',
        },
        cardInfoName: {
            fontSize: '1.2em',
            marginBottom: '5px',
        },
        overlay: {
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
            opacity: '0',
            transition: 'opacity 0.3s ease, top 0.3s ease',
            padding: '10px',
        },
        overlayVisible: {
            opacity: '1',
            top: '0',
        },
        underline: {
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '0',
            height: '5px',
            backgroundColor: 'red',
            transition: 'width 0.3s ease, left 0.3s ease',
        },
        underlineVisible: {
            width: '100%',
            left: '0',
        },
        arrow: {
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '1.5em',
            color: '#ccc',
            transition: 'opacity 0.3s ease',
            opacity: hoveredMember !== null ? '1' : '0',
            cursor: 'pointer',
        },
    };

    return (
        <div id="biodata" style={styles.container}>
            <h2 style={styles.title}>Biodata</h2>
            <h3 style={styles.subtitle}>KELOMPOK 11</h3>
            <div style={styles.teamCards}>
                {teamMembers.map((member, index) => (
                    <div
                        style={{
                            ...styles.card,
                            ...(member.name === 'Team' && { cursor: 'default' }),
                            transform: hoveredMember === index ? 'translateY(-10px)' : 'translateY(0)',
                        }}
                        key={index}
                        onMouseEnter={() => setHoveredMember(index)}
                        onMouseLeave={() => setHoveredMember(null)}
                    >
                        <div style={styles.cardImageContainer}>
                            {member.img && (
                                <img src={member.img} alt={member.name} style={styles.cardImage} />
                            )}
                        </div>
                        <div
                            style={{
                                ...styles.overlay,
                                ...(hoveredMember === index && styles.overlayVisible),
                            }}
                        >
                            {member.name !== 'Team' && (
                                <>
                                    <h4>{member.name}</h4>
                                    {member.id && <p>{member.id}</p>}
                                    {member.role && <p>{member.role}</p>}
                                </>
                            )}
                        </div>
                        <div
                            style={{
                                ...styles.cardInfo,
                                opacity: hoveredMember === index || member.name === 'Team' ? '0' : '1',
                            }}
                        >
                            <h4 style={styles.cardInfoName}>{member.name}</h4>
                        </div>
                        <div
                            style={{
                                ...styles.underline,
                                ...(hoveredMember === index && styles.underlineVisible),
                            }}
                        />
                    </div>
                ))}
            </div>
            {/* Basic CSS arrow */}
            <div className="arrow" style={styles.arrow}></div>
        </div>
    );
};

export default Biodata;
