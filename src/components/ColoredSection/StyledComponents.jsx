import styled from 'styled-components';

export const SectionWrapper = styled.div`
    background: ${props => `linear-gradient(${props.color1}, ${props.color1}, ${props.color2})`};
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    @media (max-width: 700px) {
        padding: 0;
    }
`;