import './SkillsPage.css';

import reactImg from '../assets/react.png';
import jsImg from '../assets/javascript.png';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import gitImg from '../assets/git.png';
import tsImg from '../assets/typescript.png';

const hardSkills = [
    { name: 'React', img: reactImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'Git', img: gitImg },
    { name: 'TypeScript', img: tsImg },
];

const softSkills = [
    { icon: '💬', text: 'Comunicação' },
    { icon: '🎯', text: 'Foco' },
    { icon: '⚡', text: 'Aprendizado rápido' },
    { icon: '🤝', text: 'Trabalho em equipe' },
    { icon: '🚀', text: 'Proatividade' },
    { icon: '🌊', text: 'Adaptabilidade' },
    { icon: '🧩', text: 'Flexibilidade' },
];

const SkillsPage = () => {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>

            <section className="hard-skills">
                <h2>Hard Skills</h2>
                <div className="soft-wrapper">
                    <div className="skills-grid">
                        {hardSkills.map((skill, index) => (
                            <div key={index} className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img src={skill.img} alt={skill.name} />
                                        <h3>{skill.name}</h3>
                                    </div>
                                    <div className="card-back">
                                        <h3>{skill.name}</h3>
                                        <p>Experiência prática e sólida em {skill.name}.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="soft-skills">
                <h2>Soft Skills</h2>
                <div className="soft-wrapper">
                    <div className="soft-grid">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="soft-item">
                                <span className="soft-icon">{skill.icon}</span>
                                <p>{skill.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage;
