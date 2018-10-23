import styled from 'styled-components';

export const SectionWrapper = styled.div`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
`;