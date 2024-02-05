
import '../styles/components/technologiescontainer.sass' 
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'



const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];
  

const TechnologiesContainer = () => {
    return ( 
        <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
        { technologies.map((tech) => (
            <div className="technology-card" id= {tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
                <h3>{tech.name}</h3>
                <p>
                {tech.name === 'HTML5' && 'No site da clínica e no primeiro portfólio, o HTML foi essencial para estruturar e organizar o conteúdo, permitindo uma apresentação clara e semântica.'}
                {tech.name === 'CSS3' && ' CSS foi aplicado para estilizar e posicionar elementos, garantindo uma experiência de usuário agradável e intuitiva.'}
                {tech.name === 'JavaScript' && ' Utilizei essa poderosa linguagem para criar funcionalidades que respondem às ações dos usuários, tornando as aplicações mais dinâmicas e responsivas.'}
                {tech.name === 'Node.js' && 'Node.js para criar uma loja virtual com autenticação, permitindo um backend dinâmico e seguro, e integração com banco de dados. Projeto disponível no GitHub'}
                {tech.name === 'MySQL' && 'Utilizo MySQL nos projeto, pela eficácia no armazenamento e organização de dados. pois garante segurança, integridade, desempenho e capacidade de relacionamentos entre tabelas.'}
                {tech.name === 'React' && 'Este portfólio foi criado com React, e foi desenvolvido site MoviesLib com React e Vite, consumindo API para fornecer uma experiência dinâmica e informativa aos usuários.'}
              </p>
                    
                  
            </div>
            </div>

        ))}
         
         </div>
    </section>
        
    )
}

export default TechnologiesContainer;

