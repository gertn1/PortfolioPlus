import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';



const Sidebar = () => {
    return ( <aside id="sidebar">
        <img src={Avatar} alt = 'Germano Ribeiro'></img>
        <p className="title">Desenvolverdor</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">
         Downloand Currículo
         </a>
    </aside>
    );
};

export default Sidebar;


