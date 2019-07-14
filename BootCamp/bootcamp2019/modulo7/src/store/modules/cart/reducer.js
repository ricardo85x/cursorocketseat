import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                // const productIndex = draft.findIndex(
                //     p => p.id === action.product.id
                // );
                // if (productIndex >= 0) {
                //     draft[productIndex].amount += 1;
                // } else {
                //     draft.push({ ...action.product, amount: 1 });
                // }
                const { product } = action;
                draft.push(product);
            });

        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@cart/UPDATE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    if (action.action === 'ADD') {
                        draft[productIndex].amount += 1;
                    } else {
                        draft[productIndex].amount -= 1;
                    }
                    if (draft[productIndex].amount === 0) {
                        draft.splice(productIndex, 1);
                    }
                }
            });
        default:
            return state;
    }
}
