import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.721233804618!2d83.16118917494256!3d17.710624283232754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cb428b8087%3A0xaa3e198c43836a65!2sVignan&#39;s%20Institute%20Of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1721465809974!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" title="mymap" referrerPolicy="no-referrer-when-downgrade"></iframe>
     

     <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/manwqwrr" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="Enter your Email" name="Email" autoComplete="off" required  />

          <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your Message"></textarea>
        
           <input type="submit" value="send" />
        </form>
      </div>
     </div>
    </Wrapper>
    );
};

export default Contact;
