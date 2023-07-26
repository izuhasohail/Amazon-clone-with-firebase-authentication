
export const initialState={
    basket:[],
    user:null
  
}

// SELECTOR
export const getBasketTotal=(basket)=>{
   return basket?.reduce((amount,item)=>item.price+amount,0);

    /*reduce function will basically iterate over each basket element
    and will add each item's price into amount variable whose initial
    value is set to 0 and this function direct;y return the value in amount variable */

}

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            
               const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
               );
               let newBasket=[...state.basket]
               if(index>=0){
                newBasket.splice(index,1)

               } 
               else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                )
               }
               return{
                ...state,
                basket:newBasket
               }

        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        
        case 'EMPTY_BASKET':    
        return{
            ...state,
            basket:[]
        }

              
            
        default:
            return state;    
    }

}
export default reducer;