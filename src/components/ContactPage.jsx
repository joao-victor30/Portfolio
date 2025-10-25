import './ContactPage.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contato</h1>

            <section className="social-section">
                <a
                    href="https://www.linkedin.com/in/joao-victor-ferreira-de-souza-556b88186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img src={linkedin} alt="LinkedIn" />
                </a>

                <a
                    href="https://github.com/joao-victor30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img src={github} alt="GitHub" />
                </a>

                <a
                    href="https://www.instagram.com/joao_1998ferreira?igsh=NXdsaHp0eWsxZmthsQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img src={instagram} alt="Instagram" />
                </a>
            </section>

            <section className="form-section">
                <form
                    action="https://formspree.io/f/xqagzngo"
                    method="POST"
                    className="contact-form"
                >
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-input"
                            required
                        />
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>

                    <div className="input-box">
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="form-textarea"
                            required
                        ></textarea>
                        <label htmlFor="message" className="form-label">Mensagem</label>
                    </div>

                    <button type="submit" className="send-btn">Enviar</button>
                </form>
            </section>
        </div>
    );
};

export default ContactPage;
