import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css'; // Create this CSS file for styling
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

const jobListings = [
    {
        id: 1,
        title: "Consultant(e) Confirmé(e) SAP SuccessFactors (H/F)",
        description: "En tant que Consultant(e) SAP SuccessFactors, vous interviendrez sur différents sujets et pouvez justifier des compétences suivantes :",
        tasks: [
            "Réalisation de livrables liés à la gestion de projet SuccessFactors",
            "Analyse du cycle de vie des employés dans les organisations internationales et des processus de gestion afférents",
            "Activité de conseil aux entreprises globales en termes de meilleures pratiques en gestion du capital humain et de soutenir leur migration vers le cloud (SAP HCM cloud)",
            "Paramétrage et construction du système et des processus en conformité avec les documents de spécification",
            "Intégration & interfaçage de la solution SuccessFactors / SAP ou autre tierce partie SIRH",
            "Préparation et exécution des plans et scripts de tests",
            "Animation de séances de formation sur le produit SuccessFactors pour les utilisateurs finaux"
        ],
        location: "Région parisienne",
        category: "CDI",
        date: new Date('2023-07-16T09:00:00'),
        education: "BAC+3 à BAC+5",
        experience: "Au moins 2 ans d'expérience",
        languages: "Français et anglais"
    },
    {
        id: 2,
        title: "Consultant(e) SAP HR (H/F)",
        description: "Nous sommes à la recherche de notre prochain(e) consultant(e) SAP HR ayant des compétences sur la paie et la gestion administrative.",
        tasks: [
            "Tâche 1",
            "Tâche 2",
            "Tâche 3"
        ],
        location: "Région parisienne",
        category: "CDI",
        date: new Date('2022-07-16T09:00:00'),
        education: "BAC+3 à BAC+5",
        experience: "Au moins 2 ans d'expérience",
        languages: "Français et anglais"
    }
];

const JobDetails = () => {
    const { id } = useParams();
    const job = jobListings.find(job => job.id.toString() === id);

    if (!job) {
        return <div>Job not found</div>;
    }

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        const response = await fetch("https://formspree.io/f/meojonzo", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            const data = await response.json();
            if (data.errors) {
                setResult(data.errors.map(error => error.message).join(", "));
            } else {
                setResult("Error submitting form");
            }
        }
    };

    return (
        <div className="job-detail">
            <h1>{job.title}</h1>
            <div className="job-info">
                <span className="job-location">📍 {job.location}</span>
                <span className="job-date">📅 Publié {formatDistanceToNow(new Date(job.date), { addSuffix: true, locale: fr })}</span>
            </div>
            <p>{job.description}</p>
            <ul>
                {job.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h2>Caractéristiques de l'emploi</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Catégorie emploi</td>
                        <td>{job.category}</td>
                    </tr>
                    <tr>
                        <td>Formation</td>
                        <td>{job.education}</td>
                    </tr>
                    <tr>
                        <td>Expérience</td>
                        <td>{job.experience}</td>
                    </tr>
                    <tr>
                        <td>Langues</td>
                        <td>{job.languages}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Postuler en ligne</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div>
                    <label>Nom*</label>
                    <input type="text" placeholder="Entrez votre nom" name="name" required />
                </div>
                <div>
                    <label>Prénom*</label>
                    <input type="text" placeholder="Entrez votre prénom" name="firstname" required />
                </div>
                <div>
                    <label>Email*</label>
                    <input type="email" placeholder="Entrez votre email" name="email" required />
                </div>
                <div>
                    <label>CV*</label>
                    <input type="file" name="cv" required />
                </div>
                <button type="submit">Envoyer<i className="fas fa-paper-plane"></i></button>
            </form>
            <p>{result}</p>
        </div>
    );
};

export default JobDetails;
