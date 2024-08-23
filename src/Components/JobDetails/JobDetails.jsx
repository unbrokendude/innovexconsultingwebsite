import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css'; // Ensure this file exists for styling
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import emailjs from 'emailjs-com';

const jobListings = [
    {
        id: 1,
        title: "Stagiaire Consultant(e) SAP HR (H/F)",
        offre: "recrute pour le compte de sa filiale BlueTalent basée à Rabat.",
        offreDetails : "Innovex consulting est une startup française fondée en 2023 par des experts spécialisés dans le domaine des SIRH, avec un focus particulier sur l’outil SAP HR. Chez Innovex consulting, nous nous engageons à fournir à nos clients des solutions innovantes et sur mesure pour répondre à leurs besoins en matière de gestion des ressources humaines.",
        description: "Nous recrutons un(e) stagiaire, rattaché(e) à l’agence de Rabat qui aura l’opportunité d’intervenir sur des projets d’accompagnement de nos clients sur leur système d’information RH (SIRH). Vous serez impliqué(e) dans l’optimisation de la performance et des processus, et dans le déploiement et la maintenance de solutions. Accompagné(e) par un consultant expérimenté, vous pourrez être amené(e) à intervenir sur différents types de missions et ainsi à exercer des activités très diverses :",
        tasks: {
            moe: [
                "Assistance à l’animation d’ateliers de conception sur les processus RH",
                "Assistance à la rédaction des spécifications fonctionnelles",
                "Paramétrage de la solution et tests de ces paramétrages",
                "Livraison au client",
                "Analyse et correction des incidents"
            ],
            amoa: [
                "Recueil et compréhension des besoins du client",
                "Assistance à la préparation / animation d’ateliers RH",
                "Assistance à la conception et réalisation de la recette fonctionnelle",
                "Création des supports de formation et guides utilisateurs",
                "Assistance et support fonctionnel"
            ]
        },
        criteres: [
            "Diplômé (Bac+5) en informatique ou en dernière année de master ou du cycle d'ingénieur en informatique.",
            "Capacité à travailler en équipe et en autonomie.",
            "Bon niveau en anglais."
        ],
        location: "Rabat",
        category: "Stage",
        date: new Date('2024-08-22T09:00:00'),
        avantages: [
            "Formation et encadrement par des professionnels expérimentés.",
            "Opportunité d'acquérir une expérience significative.",
            "Gratification de stage",
            "Possibilité de travail à distance jusqu’à 2 jours/semaine"
        ]
    }
];

const JobDetails = () => {
    const { id } = useParams();
    const job = jobListings.find(job => job.id.toString() === id);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi du formulaire en cours...");
    
        try {
            const formData = new FormData(event.target);
    
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                setResult("Formulaire soumis avec succès");
                event.target.reset();
            } else {
                const errorData = await response.text(); // Get the response body if not ok
                console.error('Response Error:', errorData);
                setResult("Error: " + response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
            setResult(`Error: ${error.message}`);
        }
    };
    
    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div className="job-detail">
            <h1>{job.title}</h1>
            <div className="job-info">
                <span className="job-location">📍 {job.location}</span>
                <span className="job-date">📅 Publié {formatDistanceToNow(new Date(job.date), { addSuffix: true, locale: fr })}</span>
            </div>
            <p><strong>Innovex Consulting</strong> {job.offre}</p>
            <p>{job.offreDetails}</p>
            <h2>Description du poste</h2>
            <p>{job.description}</p>
            <h3>Missions de maitrise d’œuvre (MOE)</h3>
            <ul>
                {job.tasks.moe.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h3>Missions d’assistance à maîtrise d’ouvrage (AMOA)</h3>
            <ul>
                {job.tasks.amoa.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h2>Profil recherché</h2>
            <ul>
                {job.criteres.map((criteres, index) => (
                    <li key={index}>{criteres}</li>
                ))}
            </ul>
            <h2>Avantages</h2>
            <ul>
                {job.avantages.map((avantages, index) => (
                    <li key={index}>{avantages}</li>
                ))}
            </ul>
            <h2>Postuler en ligne</h2>
            <form onSubmit={onSubmit} method="POST" encType="multipart/form-data">
            <div>
                <label>Nom*</label>
                <input type="text" placeholder="Entrez votre nom" name="lastName" required />
            </div>
            <div>
                <label>Prénom*</label>
                <input type="text" placeholder="Entrez votre prénom" name="firstName" required />
            </div>
            <div>
                <label>Email*</label>
                <input type="email" placeholder="Entrez votre email" name="email" required />
            </div>
            <div>
                <label>Téléphone*</label>
                <input type="tel" placeholder="Entrez votre numéro de téléphone" name="phone" required />
            </div>
            <div>
                <label>CV*</label>
                <input type="file" name="cv" required />
            </div>
            <input type="hidden" name="jobTitle" value={job.title} />
            <button type="submit">Envoyer<i className="fas fa-paper-plane"></i></button>
            </form>


            <p>{result}</p>
        </div>
    );
};

export default JobDetails;
