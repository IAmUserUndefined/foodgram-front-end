import styled from "styled-components";

export const FileListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;

  @media (max-width: 576px) {
    > div svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
      width: 300px;
    }

  @media (max-width: 576px) {
    > img {
      width: 170px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #f00;
  }

  @media (max-width: 576px) {
    > div svg {
      width: 40px;
      height: 40px;
    }
  }
`;