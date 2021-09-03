import React from "react";
import {useAppDispatch,useAppSelector} from '../stores/hooks'
import {fetchWeatherData} from '../stores/weather'


function Search(props: any) {


    // const data = useSelector(state => state.weather.data);
    const data = useAppSelector(state=>state.weather.data);

    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();

    // inputref
    const inputRef = React.createRef<HTMLInputElement>()
  
  return (
    <React.Fragment>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={()=>dispatch(fetchWeatherData('weather',inputRef.current?.value))}>
        confirm
      </button>
      <p>{data && JSON.stringify(data, null, 2)}</p>
    </React.Fragment>
  );
}

export default Search;
