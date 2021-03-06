import styled from 'styled-components';

import { View } from '../pure';
import theme from '../../utils/theme';

const Tile = styled(View)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: calc((100% - 36px) / 3);
    padding: 16px 0 20px;
    margin: 0 12px 12px 0;
    min-height: 110px;
    background: ${theme.color.grey};
    border-radius: ${theme.radius.m};
    cursor: pointer;
`;

export default ({ title, icon = <div />, onClick }) => (
    <Tile onClick={onClick}>
        <div>{icon}</div>
        <div>{title}</div>
    </Tile>
);
