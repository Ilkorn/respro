import { connect } from 'react-redux';

import { selectors } from '../../../data/filter';

const dict = {
    title: {
        '#breakfast': 'Завтрак'
    },
    description: {
        '#breakfast': 'Будни с 8:00 до 11:30'
    }
};

export default connect(
    state => ({
        title: dict.title[selectors.getFilter(state).mealType[0]],
        description: dict.description[selectors.getFilter(state).mealType[0]]
    })
);
