import styled from 'styled-components';

export const Container = styled.div`
  .reflesh {
    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: 19px 21px;
    border-radius: 100px;
    border: 0;
    margin: 0 10px 0 10px;
    background: #6f1971;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s;
    font-size: 1rem;
  }

  .reflesh:hover {
    background: #9e3ba0;
  }
  h1 {
    text-align: center;
    margin: 4rem 0;
    font-family: sans-serif;
    font-size: 300%;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem auto;
  }
  .buttonPagination {
    padding: 13px 16px;
    border-radius: 100px;
    border: 0;
    margin: 0 10px 0 10px;
    background: #6f1971;
    color: white;
    font-weight: bold;
    font-family: 'Bree Serif', serif;
    transition: all 0.3s;
    font-size: 1rem;
  }
  .buttonPagination:hover {
    background: #9e3ba0;
  }
  p {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: 'Bree Serif', serif;
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
  max-width: 80%;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    margin-bottom: 2rem;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

  .title {
    font-size: 175%;
    align-items: center;
    text-align: center;
    font-family: 'Bree Serif', serif;
    margin: 0 0 10px 0;
  }
`;
