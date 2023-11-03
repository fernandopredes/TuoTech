import styled from 'styled-components';
import image from '../assets/form.jpg'

interface ContactProps {
  id?: string;
}


const ContactForm: React.FC<ContactProps> = ({ id })=> {
  return (
    <FormContainer id={id}>
      <h2>Solicite agora sua primeira consultoria LGPD 100% gratuita</h2>
      <ContentWrapper>
        <FormWrapper>
          <form action="https://formspree.io/YOUREMAIL" method="POST">
            <Input placeholder="Nome" type="text" name="name" required />
            <Input placeholder="E-mail" type="email" name="_replyto" required />
            <Input placeholder="Assunto: Preciso de uma consultoria" type="text" name="subject"  />
            <TextArea placeholder="Mensagem" name="message" required></TextArea>
            <CenteredButton>
              <SubmitButton type="submit">Enviar</SubmitButton>
            </CenteredButton>
          </form>
        </FormWrapper>
        <ImageWrapper>
          <img src={image} alt="Homem escrevendo em quadro" />
        </ImageWrapper>
      </ContentWrapper>
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
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
`;

const FormWrapper = styled.div``;

const ImageWrapper = styled.div`
    img {
        max-width: 90%;
        border-radius: 10px;
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
`;

export default ContactForm;
