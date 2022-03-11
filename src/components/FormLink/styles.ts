import styled from "styled-components";

const FormLinkContainer = styled.div`
    > a {
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            color: #000;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
        }
    }
`;

export default FormLinkContainer;