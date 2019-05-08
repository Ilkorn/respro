import styled from 'styled-components';

import { View } from '../pure';
import Overlay from '../overlay';
import Tile from './tile';
import tilesContainer from './tilesContainer';

const MainWrapper = styled(View)`
    position: absolute;
    top: 92px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.color.white};
    z-index: ${props => props.theme.zIndex.l};
`;


const TilesWrapper = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    padding: 36px 16px 36px 28px;
`;

export const Tiles = ({ items }) => (
    <MainWrapper>
        <TilesWrapper>
            {items.map((item, key) => <Tile {...item} key={key}/>)}
        </TilesWrapper>
    </MainWrapper>
);

export default tilesContainer(Tiles);
