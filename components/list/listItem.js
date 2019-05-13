import styled from 'styled-components';

import { View, Title, Element, Description, Counter } from '../pure';

const Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 16px 0 8px;
`;

const DescriptionWrapper = styled(View)`
    flex: 1 1 100%;
    padding-left: 16px;
`;

const ItemTitle = styled(Title)`
    font-size: ${props => props.theme.fontSize.m};
    padding: 5px 0 0;
    max-height: 2.5em;
    overflow: hidden;
    margin-bottom: 16px;
`;

const ItemTitleExtra = styled(Element)`
    font-size: ${props => props.theme.fontSize.m};
    color: ${props => props.theme.color.greyLight};
    padding-left: 6px;
`;

const ItemDescription = styled(Description)`
    display: block;
    font-size: ${props => props.theme.fontSize.m};
    color: ${props => props.theme.color.greyLight};
    line-height: 22px;
    margin-bottom: 16px;
    overflow: hidden;
    max-height: 44px;
    text-overflow: ellipsis;
`;

const ItemImage = styled.div`
    flex: 0 0 80px;
    height: 80px;
    background-size: cover;
    background-image: url(${props => props.src});
    background-position: center;
    border-radius: 6px;
`;

const ControllSection = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ItemAmount = styled(View)`
    font-size: 20px;
`;

export default ({ item, handleAddDish, handleRemoveDish }) => (
    <Wrapper>
        <ItemImage src={item.linkPhoto.storageLink} />
        <DescriptionWrapper>
            <ItemTitle>
                <span>{item.name}</span>
                <ItemTitleExtra>{item.exit} г.</ItemTitleExtra>
            </ItemTitle>
            <ItemDescription>
                {item.content}
            </ItemDescription>
            <ControllSection>
                <ItemAmount>{item.amount} р.</ItemAmount>
                <Counter id={item.id} add={handleAddDish} sub={handleRemoveDish} count={item.inBasket} />
            </ControllSection>
        </DescriptionWrapper>
    </Wrapper>
);
