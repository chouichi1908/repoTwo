import React,{useState} from 'react'




function Search(props:any){


    const [result,setResult] = useState()
    const [city,setCity] = useState('')
    

    const handleClick = (type:any)=>{
        fetch(`https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=8d165baae18a00568b825d7ea3b56ec5`).then(res=>res.json()).then(data=>{setResult(data)})
    }



    return(

        <React.Fragment>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={handleClick.bind(handleClick,props.type)}>confirm</button>
            <p>
                {result&&JSON.stringify(result,null,2)}
            </p>
        </React.Fragment>

    )


}

export default Search;