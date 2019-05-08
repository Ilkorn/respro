import List from './list';
import listWithFilterContainer from './listWithFilterContainer'
import listFromBasketContainer from './listFromBasketContainer'

export const ListWithFilter = listWithFilterContainer(List);
export const ListFromBasket = listFromBasketContainer(List);
