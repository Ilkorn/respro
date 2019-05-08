import styled from 'styled-components';

export const View = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize.m};
    box-sizing: border-box;
`;

export const Element = styled.span`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize.m};
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fontFamily};
    font-size: 30px;
    box-sizing: border-box;
    margin: 0;
    padding: 5px 0;
`;

export const Description = styled.p`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize.m};
    box-sizing: border-box;
    margin: 0;
    padding: 1px 0;
`;

export { default as Counter } from './counter';
