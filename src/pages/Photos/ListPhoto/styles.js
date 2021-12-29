import styled from "styled-components";

export const FileListContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem;

    >div {
        display: flex;
        align-items: center;
    }

    >div + div {
        justify-content: center;
        width: 35%;
    }

    >div img {
        width: 90%;
    }

    >div svg {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 576px) {
        >div svg {
            width: 40px;
            height: 40px;
        }
    } 
`;