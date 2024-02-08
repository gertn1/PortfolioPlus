import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/GermanoLinkdin4.png';

import '../styles/components/sidebar.sass';



const Sidebar = () => {
    return ( <aside id="sidebar">
        <img src={Avatar} alt = 'Germano Ribeiro'></img>
        <p className="title">Desenvolverdor Full Stack</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="./curriculoGermano.pdf" download="Curriculo_Germano_Ribeiro.pdf" className="btn">
         Downloand Currículo
         </a>
    </aside>
    );
};

export default Sidebar;


