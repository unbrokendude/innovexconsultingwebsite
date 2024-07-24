import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import './Carriere.css';

const Carriere = () => {
    const [keywords, setKeywords] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    const jobListings = [
        {
            id: 1,
            title: "Consultant(e) Confirmé(e) SAP SuccessFactors (H/F)",
            description: "En tant que Consultant(e) SAP SuccessFactors, vous interviendrez sur différents sujets et pouvez justifier des compétences suivantes : Réalisation de livrables liés à la gestion de projet Success...",
            location: "Région parisienne",
            category: "CDI",
            date: new Date('2023-07-16T09:00:00')
        },
        {
            id: 2,
            title: "Consultant(e) SAP HR (H/F)",
            description: "Nous sommes à la recherche de notre prochain(e) consultant(e) SAP HR ayant des compétences sur la paie et la gestion administrative. La connaissance de l’Abap et de la gestion des temps serait...",
            location: "Région parisienne",
            category: "CDI",
            date: new Date('2022-07-16T09:00:00')
        }
    ];

    useEffect(() => {
        // Sort jobListings by date in descending order
        const sortedJobs = jobListings.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFilteredJobs(sortedJobs);
    }, []);

    const handleSearch = () => {
        const filtered = jobListings.filter(job => 
            (category === '' || job.category === category) && 
            (location === '' || job.location === location) &&
            (keywords === '' || job.title.toLowerCase().includes(keywords.toLowerCase()))
        );
        setFilteredJobs(filtered);
    };

    return (
        <div className="job-offers">
            <h1>Nos offres d'emploi</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Mots-clés"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Catégorie</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="Stage">Stage</option>
                    <option value="Alternance">Alternance</option>
                </select>
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Lieu</option>
                    <option value="Région parisienne">Région Parisienne</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Casablanca">Casablanca</option>
                </select>
                <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                    <div className="job-listing" key={index}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <div className="job-info">
                            <span className="job-location">📍 {job.location}</span>
                            <span className="job-date">📅 Publié {formatDistanceToNow(new Date(job.date), { addSuffix: true, locale: fr })}</span>
                        </div>
                        <Link to={`/job/${job.id}`}>
                            <button className="learn-more">En savoir plus</button>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="no-jobs-message">Aucune offre d'emploi ne correspond à votre recherche.</p>
            )}
        </div>
    );
};

export default Carriere;
