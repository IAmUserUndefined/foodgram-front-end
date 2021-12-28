import styled from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    >nav ul {
        display: flex;
        flex-direction: row;
    }

    >nav li {
        display: flex;
        list-style: none;
        margin-right: 1.5rem;
    }

    >nav a {
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        background-color: #e02041;
        padding: 10px;
        color: #fff;
    }

    >div img {
        width: 330px;
    }
`;

export default HeaderStyle;