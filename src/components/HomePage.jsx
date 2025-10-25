import React from 'react';
import { Link } from 'react-router-dom';
import { FolderOpen, Mail } from 'lucide-react';
import perfil from '../assets/perfil.jpg';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-photo">
                    <img
                        src={perfil}
                        alt="João Victor"

                    />
                    <div className="drip drip1"></div>
                    <div className="drip drip2"></div>
                    <div className="drip drip3"></div>
                    <div className="drip drip4"></div>
                    <div className="drip drip5"></div>
                </div>
                <div className="home-info">
                    <h1>João Victor</h1>
                    <p>
                        Sou um desenvolvedor apaixonado por tecnologia e design. Entrei nesse universo em 2023, quando decidi entender o que existia por trás dos sites e jogos que sempre me fascinaram. Desde então, venho me aperfeiçoando no desenvolvimento web, buscando unir estética e funcionalidade em tudo que crio.

                        A arte moderna, os jogos eletrônicos e o impacto das cores foram o gatilho da minha curiosidade. Hoje, transformo essa inspiração em código criando soluções práticas, elegantes e eficientes.
                        Meu objetivo é simples: usar tecnologia para resolver problemas de verdade e tornar a experiência digital mais intuitiva, bonita e humana.
                    </p>
                    <div className="home-links">
                        <Link to="/projects" className="home-icon" >
                            <FolderOpen size={32} />
                            <span>Projects</span>
                        </Link>
                        <Link to="/contact" className="home-icon">
                            <Mail size={32} />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
