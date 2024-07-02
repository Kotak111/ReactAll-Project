export const counterreducer = (state = 0 ,action) =>{
    switch (action.type){
        case "inc":
            console.log(state);
            return state +1
        case "dec":
               state > 0  ? state--: state
           

        default :
        return state
    }
}
