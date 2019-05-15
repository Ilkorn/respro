import styled from 'styled-components';

import { View, Title, Element, Description, Counter } from '../pure';
import theme from '../../utils/theme';

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
    /* display: flex; */
    /* align-items: center; */
    font-size: ${theme.fontSize.m};
    padding: 5px 0 0;
    margin-bottom: 16px;
`;

const ItemTitleExtra = styled(Element)`
    font-size: ${theme.fontSize.m};
    color: ${theme.color.greyLight};
    padding-left: 6px;
    font-weight: lighter;
    white-space: nowrap;
`;

const ItemDescription = styled(Description)`
    display: block;
    font-size: ${theme.fontSize.m};
    color: ${theme.color.greyLight};
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
                <span style={{position: "relative"}}>
                    <span style={{position: 'absolute', top: 0}}>
                        {
                            item.isVegan &&
                            <img
                                src="/static/img/icons/ic-veg.svg"
                                alt="vegan food logo"
                            />
                        }
                        {
                            item.isSpicy &&
                            <img
                                src="/static/img/icons/ic-spicy.svg"
                                alt="spicy food logo"

                            />
                        }
                    </span>
                </span>

            </ItemTitle>
            <ItemDescription>
                {item.content}
            </ItemDescription>
            <ControllSection>
                <ItemAmount>{item.amount} р.</ItemAmount>
                <Counter
                    id={item.id}
                    add={handleAddDish}
                    sub={handleRemoveDish}
                    count={item.inBasket}
                    availability={item.availability}
                />
            </ControllSection>
        </DescriptionWrapper>
    </Wrapper>
);
