
export interface initState{
    allCount: number,
    counters: any[],
}

export enum actionTypes {
    COUNT_PLUS = "COUNT_PLUS",
    COUNT_MINUS = "COUNT_MINUS",
    COUNTERS_PLUS = "COUNTERS_PLUS",
    COUNTERS_MINUS  = "COUNTERS_MINUS",
    START_INT  = "START_INT",
}

interface customAction{
    type: actionTypes.COUNT_PLUS | actionTypes.COUNT_MINUS | actionTypes.START_INT,
    payload : number
}

interface customActionCounters{
    type:  actionTypes.COUNTERS_PLUS | actionTypes.COUNTERS_MINUS ,
}

export type combineAction = customAction | customActionCounters
