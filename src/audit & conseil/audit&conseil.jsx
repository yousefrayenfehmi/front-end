import React from "react";
import Navbar from "../navbar/navbar";
import Section2 from "../section/section2";
import Card from "../coference/cards";
import Timeline from "./etape";
import MediaCard from "../service/card";
import FAQ from "./question";
import Footer from "../contact/contact";
const Audit=()=>{
    const steps = [
        {
          title: 'Kick-off de la mission',
          description: 'Entretiens avec les dirigeants de votre entreprise pour nous aider à comprendre qui sont vos clients, vos fournisseurs, vos salariés et comment est structurée votre organisation.',
          image: 'img/formation.jpg',
        },
        {
          title: 'Diagnostic',
          description: 'Description of the diagnostic step goes here.',
          image: 'img/cof.png',
        },
        {
          title: 'Affinage',
          description: 'Description of the refinement step goes here.',
          image: 'img/f.jfif',
        },
        {
            title: 'Travail en chambre',
            description: 'Analyse des résultats des entretiens réalisés pendant le diagnostic et identification par Mister IA des bons outils et prompts à mettre en place dans l’entreprise.',
            image: 'img/R.jfif',
          },
          {
            title: 'Recommandations',
            description: 'Livrables produits par Mister IA pour présenter aux dirigeants et aux équipes les solutions qui vont être mises en place pour faciliter leur quotidien grâce à l’IA.',
            image: 'img/p.jfif',
          },
          {
            title: 'Conduite du changement',
            description: 'Conduite du changement',
            image: 'img/for.jfif',
          },
    
    
    
    ]
    return(

        <div>
        <Navbar />        
        <Section2 img="img/cof.png" titre="Optimisez vos process en intégrant ChatGPT et l’IA"  para="Mister IA réalise un audit complet de vos processus et propose des recommandations personnalisées pour déployer efficacement ChatGPT et d'autres outils d'IA, améliorant ainsi les performances et la productivité de votre entreprise." />
        <div class="card-container mt-5">
        <MediaCard title="Pourquoi faire un audit IA ?" para="Faire un audit IA permet d'identifier précisément comment et où l'intelligence artificielle peut améliorer vos processus spécifiques et augmenter votre productivité ainsi que celle de vos collaborateurs. " img="img/10921082.png"/>
        <MediaCard title="Comment sont fait nos audits ?" para="Lors de nos audits IA, nous effectuons une analyse approfondie de vos processus et métiers, en collaborant étroitement avec vos équipes pour identifier les inefficacités, les tâches chronophages et les opportunités d'amélioration par l'IA, afin de maximiser les bénéfices de l'implémentaton dans votre organisation." img="img/flag.jfif"/>
        <MediaCard title="Quels seront les résultats ?" para="À l'issue de cet audit, nous élaborons des recommandations personnalisées et pratiques, incluant des stratégies détaillées et des solutions sur mesure pour une intégration efficace de l'IA, ainsi que des plans d'action concrets pour leur mise en œuvre." img="img/seminar.png" />
        </div>
        <h1>Les principes d’une mission Mister IA</h1>
        <Card title="Productivité"  content="Nous mettons en place des process qui permettent à vos collaborateurs de devenir plus productifs."/>
        <Card title="Simplicité" content="Nous nous engageons à ne pas transformer toute votre IT et à proposer des services peu onéreux."/>
        <h1>Notre méthodologie</h1>
        <p style={{ textAlign: 'center' }}>
  Mister IA prend par la main vos équipes pour comprendre en détail leur quotidien et les aider à utiliser l’IA dans les process les plus opportuns.
</p>
        <Timeline steps={steps}/>
        <FAQ/>
        <Footer/>
        </div>
    
    )
}
export default Audit;