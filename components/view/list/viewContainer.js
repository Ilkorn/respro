import { connect } from 'react-redux';

import { selectors } from '../../../data/filter';

const dict = {
    title: {
        '#breakfast': 'Завтрак',
        '#lunch': 'Обед',
        '#dinner': 'Ужин',
        '#dessert': 'Десерт',
        '#drinks': 'Напитки'
    },
    description: {
        '#breakfast': 'Будни с 8:00 до 11:30',
        '#lunch': 'Обеды в будни с12 до 16:30'
    }
};

export default connect(
    state => ({
        title: dict.title[selectors.getFilter(state).mealType[0]],
        description: dict.description[selectors.getFilter(state).mealType[0]]
    })
);
