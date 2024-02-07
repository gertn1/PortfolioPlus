import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';


import '../styles/components/socialnetworks.sass';


const socialNetworks = [
   { name : 'linkedin', icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/germano-lima-ribeiro-b0b06b231/' },
   { name: 'github', icon: <FaGithub />, url: 'https://github.com/gertn1' },
   { name : 'instagram', icon: <FaInstagram/> },
];

const SocialNetworks = () => {
    return( 
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href="#" className='social-btn' id={network.name} key = {network.name}>
                {network.icon}
            </a>
        ))}

</section>
);
};
 
export default SocialNetworks;


