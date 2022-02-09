import styled from "styled-components";

type NavigationTypes = {
  left: string
}

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
`;

export const IconMenu = styled.div`
  display: none;
  cursor: pointer;

  > svg {
    width: 40px;
    height: 40px;
  }
  
  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 768px) {
    > svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 576px) {
    > svg {
      width: 30px;
      height: 30px;
    }
  }

`;

export const Navigation = styled.nav<NavigationTypes>`

  > ul {
    display: flex;
    flex-direction: row;
  }

  > ul li {
    display: flex;
    list-style: none;
    margin-right: 1.5rem;
  }

  > ul li a {
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: #e02041;
    padding: 13px;
    color: #fff;
    border-radius: 50px;
  }

  @media (max-width: 992px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 5.8rem;
    left: ${({ left }) => `${left}`};
    background-color: #e02041;
    transition: all 0.7s;

    > ul {
      flex-direction: column;
      width: 100%;
    }

    > ul li, ul li a {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    top: 5.4rem;
  }

  @media (max-width: 576px) {
    top: 4.3rem;
  }
`;

export const ContainerImage = styled.div`
  > img {
    width: 330px;
  }

  @media (max-width: 768px) {
    > img {
      width: 280px;
    }
  }

  @media (max-width: 576px) {
    > img {
      width: 200px;
    }
  }
`;