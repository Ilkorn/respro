import styled from 'styled-components';
import theme from '../../utils/theme';

export const View = styled.div`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.m};
    box-sizing: border-box;
`;

export const Element = styled.span`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.m};
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-family: ${theme.fontFamily};
    font-size: 30px;
    box-sizing: border-box;
    margin: 0;
    padding: 5px 0;
`;

export const Description = styled.p`
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.m};
    box-sizing: border-box;
    margin: 0;
    padding: 1px 0;
`;

export { default as Counter } from './counter';
