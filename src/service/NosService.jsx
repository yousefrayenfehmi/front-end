import React from "react";
import MediaCard from "./card";
import "./card.css"; 
const Service=()=>{
        return(
                <div >
                <h1>Nos service IA:</h1>
                <div class="card-container mt-5">
                <MediaCard url="/formation" title="Formations IA" img="img/training.png" para="Nos formations en intelligence artificielle générative sont spécialement conçues pour faciliter l'implémentation de l'IA dans les entreprises. Chaque session est conçue pour rendre tous les participants opérationnels sur l'IA, assurant ainsi une adoption rapide et efficace au sein de votre organisation."></MediaCard>
                <MediaCard url ="/audit" title="Audit & conseil" img="img/audit.png" para="Notre offre d'audit et de conseil est spécialement adaptée aux spécificités de votre organisation et de vos métiers. Nos consultants experts en IA réalisent un audit détaillé de vos process, puis fournissent des recommandations précises, pratiques et personnalisées pour implémenter l'IA de façon optimale au sein de votre organisation"></MediaCard>
                <MediaCard url="/cof" img='/img/seminar.png' title="Conférences" para="Nos fondateurs et experts animent des conférences pour sensibiliser vos collaborateurs à l'intelligence artificielle. Ces conférences visent à approfondir leur compréhension de l'IA et à les préparer à une utilisation responsable et efficace de cette technologie."></MediaCard>
                </div>

                </div>
        )
       
        
        

}

export default Service;