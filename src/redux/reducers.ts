import {actionTypes, combineAction, initState} from "../types";

const defaultState : initState = {
    allCount:0,
    counters: [{id:Math.ceil(Math.random()*100000), count: 0, isFourth:false, startInt:false},],
}

 const reducer = (state=defaultState,action:combineAction) :initState=> {
        switch (action.type) {
            case actionTypes.COUNT_PLUS:
                return {
                    ...state,
                    counters: state.counters.map(el=>el.id===action.payload?{...el, count: el.count +1}:{...el}),
                    allCount: state.allCount + 1
                }
            case actionTypes.COUNT_MINUS:
                return {
                    ...state,
                    counters:state.counters.map(el=>el.id===action.payload?{...el, count: el.count -1}:{...el}),
                    allCount: state.allCount - 1
                }
            case actionTypes.COUNTERS_MINUS:
                return {
                    ...state,
                    counters:state.counters.slice(0,-1)
                }
            case actionTypes.COUNTERS_PLUS:
                return {
                    ...state,
                    counters: [...state.counters, {id:Math.ceil(Math.random()*100000),
                        count: state.counters?.length>0?
                            state.counters.map((el)=>el.count).reduce(function(a,b){return(a+b)}):
                            0,
                        isFourth:Number.isInteger((state.counters.length+1)/4)||false,
                        startInt:false
                    }]
                }
            case actionTypes.START_INT:
                return {
                    ...state,
                    counters:state.counters.map(el=>el.id===action.payload?{...el, startInt: true}:{...el}),
                }

            default:
                return state
        }

}

export {reducer}

export type RootState = ReturnType<typeof reducer>
