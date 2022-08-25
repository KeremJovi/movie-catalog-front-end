import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 30px auto;
  }

  .movie {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  img {
    max-width: 300px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
    max-width: 50%;
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    position: absolute;
    top: 0px;
    left: 1rem;
    margin: 2rem auto;
    padding: 1.2rem 1.5rem;
    font-family: 'Ubuntu', sans-serif;
    border-radius: 180px;
    border: 0;
    transition: all 0.5s;
    background: #6f1971;
    color: white;
    font-size: 95%;
  }

  button:hover {
    background: #9e3ba0;
  }

  span {
    font-size: 1.5rem;
    margin: 30px 0 30px 0;
    font-family: 'Bree Serif', serif;
    margin: 1.5rem auto;
  }

  .info {
    font-size: 100%;
    font-family: 'Ubuntu', sans-serif;
    margin-top: 20px;
  }
  p {
    text-align: justify;
  }

  @media screen and (max-width: 700px) {
    div {
      flex-direction: column;
    }
    .details {
      max-width: 80%;
    }
  }
`;
