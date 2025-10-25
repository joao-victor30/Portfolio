import React from 'react';
import './ProjectsPage.css';
import loginImg from '../assets/login.png';
import painelImg from '../assets/painel.png';
import receitaImg from '../assets/receita.png';
import areceberImg from '../assets/areceber.png';

const projects = [
    {
        title: 'Tela de Login',
        image: loginImg,
        description: 'Projeto de tela de login funcional com validação.',
        link: 'https://github.com/joao-victor30/Tela-de-login.git'
    },
    {
        title: 'Painel de Contas',
        image: painelImg,
        description: 'Painel de controle de contas com dashboard interativo.',
        link: 'https://github.com/joao-victor30/Painel-de-contas.git'
    },
    {
        title: 'App de Receita',
        image: receitaImg,
        description: 'Aplicativo de receitas culinárias, fácil de navegar.',
        link: 'https://github.com/joao-victor30/App-de-Receita.git'
    },
    {
        title: 'Contas a Receber',
        image: areceberImg,
        description: 'Sistema de gestão de contas a receber.',
        link: 'https://github.com/joao-victor30/contasareceber.git'
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            <h1>Meus Projetos</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={project.image} alt={project.title} />
                                <h2>{project.title}</h2>
                            </div>
                            <div className="card-back">
                                <p>{project.description}</p>
                                <a
                                    className="project-button"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Clique aqui
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
