import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {UseTypeSelector} from "./hooks/UseTypeSelector";
import {actionTypes} from "./types";

function App() {
  const dispatch = useDispatch()
  const {counters} = UseTypeSelector(state => state)

  useEffect(()=>{
    counters.map((el)=>el.isFourth? el.startInt===false?intervalClick(el.id):null:null)
  },[counters.length])


  const intervalClick = (id:number) => {
    setInterval(()=>{
      dispatch({type:actionTypes.COUNT_PLUS,payload: id})
    },1000)
    dispatch( {type:actionTypes.START_INT,payload: id})
  }

  return (
      <div>
        {counters?.map((el)=><div className="counter" key={el.id}>
          {el.isFourth?
              <a>
                {el.count}
              </a>:
              <div>
                <button onClick={()=>  dispatch({type:actionTypes.COUNT_PLUS,payload: el.id})}> + </button>
                <a>{el.count}</a>
                <button onClick={()=>  dispatch({type:actionTypes.COUNT_MINUS,payload: el.id})}> - </button>
              </div>
          }
        </div>)}
        <button onClick={()=> dispatch({type:actionTypes.COUNTERS_PLUS})}>
           Добавить счетчик
        </button>
        <div>
          <button  style={{marginTop:'10px'}} onClick={()=> dispatch( {type:actionTypes.COUNTERS_MINUS})}>
            Удалить счетчик
          </button>
        </div>

      </div>

  );
}

export default App;
