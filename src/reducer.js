export const initialState = {
    basket: [],
};

export const getBasketTotal = ({basket}) =>{ 
    var total = 0;
    for (let index = 0; index < basket.length; index++) {
        const element = basket[index];
        total += element.price;
    }
    return total;
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0 ) {
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket!`);
            }

            return {
                ...state,
                basket: newBasket,
            }
            

        default:
            return state;
    }
};

export default reducer;

