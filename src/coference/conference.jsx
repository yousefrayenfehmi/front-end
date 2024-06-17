import React from "react";
import Navbar from "../navbar/navbar";
import Section2 from "../section/section2";
import ImageWithCards from "./imageswithcards";
import FAQ from "../cofcard/Questions";
import Footer from "../contact/contact";
import Card from "./cards";
function Conference(params) {
    const cardes = [
        {
          title: "Introduction à l'IA Générative",
          content: "Découvrez les bases de l'intelligence artificielle générative, ses principes de fonctionnement et ses principales applications. Découvrez comment l'IA a vu le jour et elle a évolué au cours des dernières années."
        },
        {
            title: "IA Générative et productivité",
            content: " Explorez comment l'IA générative améliore la productivité en automatisant des tâches répétitives, en optimisant les processus métiers et en permettant aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée. Découvrez des outils pratiques pour intégrer l'IA dans votre quotidien professionnel."
          },
          {
            title: "Les enjeux de l'IA Générative",
            content: " Comprenez les défis et enjeux posés par l'IA générative, notamment en termes de responsabilité, d'éthique, et de régulation. Apprenez à anticiper les impacts socio-économiques et à naviguer dans un paysage technologique en rapide évolution."
          },
          {
            title: "IA Générative et sécurité des données",
            content: "Découvrez comment l'IA générative peut être utilisée de manière sécurisée. Apprenez à protéger vos données sensibles et à mettre en place des stratégies de cybersécurité pour éviter les vulnérabilités associées à l'utilisation de ces technologies avancées. "
          }
      ];
     
    return(
        <div>
        <Navbar />        
        <Section2 img="img/cof.png" titre="Découvrez l'intelligence artificielle à travers nos conférences"  para="Découvrez l'intelligence artificielle avec nos conférences sur mesure. Comprenez les bases et l'origine de l'IA, son impact et ses applications grâce à nos experts, à travers des discussions interactives et des exemples concrets" />
        <h1>L’importance d’être sensibilisé à l’IA
</h1>
        <Card title="Comprendre l'IA" content="Comprendre les fondamentaux de l'IA et découvrir des outils comme ChatGPT, Gemini, et Copilot en se basant sur des cas d'usage concrets pour améliorer le quotidien des collaborateurs."/>
        <Card title="Utiliser l'IA" content="Savoir brainstormer avec l’IA, produire du contenu avec, savoir utiliser l’IA dans les logiciels du quotidien et communiquer avec l’IA."/>
<h1>Que découvrirez-vous dans nos conférences sur l’intelligence artificielle ?
</h1>
        <ImageWithCards cards={cardes}> </ImageWithCards>
        <FAQ/>
        <Footer/>
        </div>

    )
}

export default Conference;