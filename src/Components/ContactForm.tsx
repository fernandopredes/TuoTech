import styled from 'styled-components';
import image from '../assets/form.jpg'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


interface ContactProps {
  id?: string;
}


const ContactForm: React.FC<ContactProps> = ({ id }) => {
  const [state, handleSubmit] = useForm("xaygkowj");
  console.log(state)
  return (
    <FormContainer id={id}>
      <h2>Solicite agora sua primeira consultoria LGPD</h2>
      <ContentWrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Nome" type="text" name="name" required />
            <Input
              id="email"
              placeholder="E-mail"
              type="email"
              name="_replyto"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <Input placeholder="Assunto: Preciso de uma consultoria" type="text" name="subject" />

            <TextArea id="message" placeholder="Mensagem" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <CenteredButton>
            <SubmitButton type="submit" disabled={state.succeeded}>
              Enviar
            </SubmitButton>
            </CenteredButton>
          </form>
          {state.succeeded && <p>Obrigado! Em breve entraremos em contato.</p>}
        </FormWrapper>
        <ImageWrapper>
          <img src={image} alt="Cadeado" />
        </ImageWrapper>
      </ContentWrapper>
      <WhatsAppMessage>
        Ou entre em contato pelo
        <a href="https://wa.me/5521970812568/?text=Gostaria%20de%20solicitar%20minha%20primeira%20consultoria" target="_blank">
        WhatsApp <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </WhatsAppMessage>
    </FormContainer>
  );
};


const FormContainer = styled.div`
    background-color: var(--color-gold2);
    padding: 50px 0;
    text-align: center;

    h2 {
        font-size: 2.8rem;
        letter-spacing: 1.2px;
        font-weight: 700;
        margin: 0;
        padding: 36px;
        color: var(--color-black2);
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
        padding: 20px;
      }
    }
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
    padding: 0 20px;

    @media (max-width: 768px) {
      gap: 20px;
    }
`;

const FormWrapper = styled.div`
    @media (max-width: 768px) {
      order: 2;
    }
`;

const ImageWrapper = styled.div`
    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
      order: 1;
      img {
        max-width: 80%;
        margin: 0 auto;
      }
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    resize: none;
    height: 150px;
`;

const CenteredButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-gold);
    color: var(--color-black2);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-gold3);;
    }
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
`;

const WhatsAppMessage = styled.p`
    font-weight: 600;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    color: var(--color-black2);


    a {
        font-size: 1.5rem;
        display: inline-flex;
        align-items: center;
        color: #25D366;
        text-decoration: none;
        margin-left: .5rem;

        svg {
            margin-left: 0.2rem;
        }
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default ContactForm;
