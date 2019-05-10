import styled from 'styled-components';

import { View } from '../pure';
import Tile from './tile';
import tilesContainer from './tilesContainer';

const MainWrapper = styled(View)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${props => props.full ? '87%' : 'auto' };
    min-height: ${props => props.full ? '650px' : '380px' };
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

const TextWrapper = styled(View)`
    font-size: 20px;
    font-weight: lighter;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    opacity: .5;
`;

const FullSectiontWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 30px;
    height: 36%;
`;

const Logo = styled.img`
    margin-bottom: 35px;
`;

export const Tiles = ({ isFullMenu, items }) => (
    <MainWrapper full={isFullMenu} >
        {
            !!isFullMenu &&
            <FullSectiontWrapper>
                <Logo src="/static/img/icons/logo.svg" alt="logo" />
                <TextWrapper>
                    Завтраки в будни с 8 до 12, <br/>
                    Обеды в будни с12 до 16:30, <br/>
                    киши и сэндвичи по дороге с работы и вечернее меню с винной картой или кальяном.
                </TextWrapper>
            </FullSectiontWrapper>
        }

        <TilesWrapper>
            {items.map((item, key) => <Tile {...item} key={key}/>)}
        </TilesWrapper>
    </MainWrapper>
);

export default tilesContainer(Tiles);
