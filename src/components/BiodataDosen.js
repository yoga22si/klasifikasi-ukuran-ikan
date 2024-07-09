import React, { useState } from 'react';

import name1 from '../assets/name1.jpeg'; 
import name2 from '../assets/name2.jpeg'; 
import name3 from '../assets/name3.jpeg'; 



const BiodataDosen = () => {
    const teamMembers = [
        {
            name: 'Muhammad Mahrus Zain, S.S.T., M.T.I.',
            id: '169318',
            img: name1, 
        },
        {
            name: 'Dini Nurmalasari, S.T., M.T.',
            id: '048108',
            img: name2, 
        },
        {
            name: 'Mardhiah Fadli, S.T., M.T.',
            id: '078306',
            img: name3, 
        },
    ];

    const [hoveredMember, setHoveredMember] = useState(null);

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#FFF8F0',
            position: 'relative', 
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
            backgroundColor: '#FFFFFF', 
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
            <h2 style={styles.title}>Project Sponsor</h2>
            <h3 style={styles.subtitle}></h3>
            <div style={styles.teamCards}>
                {teamMembers.map((member, index) => (
                    <div
                        style={{
                            ...styles.card,
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
                            <>
                                <h4>{member.name}</h4>
                                {member.id && <p>{member.id}</p>}
                            </>
                        </div>
                        <div
                            style={{
                                ...styles.cardInfo,
                                opacity: hoveredMember === index ? '0' : '1',
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
            <div className="arrow" style={styles.arrow}></div>
        </div>
    );
};

export default BiodataDosen;
