import { useState } from "react";
import Card from "./Card/Card";
import { DEFAULTURL } from "./ApiKey";

function App(){
    const [userInput, setUserInput] = useState('')
    const [displayCity, setDisplayCity] = useState('')
    const [temp, setTemp] = useState()
    const [iconSrc, setIconSrc] = useState('')
    const [condition, setCondition] = useState()
    const [wind, setWind] = useState()
    const [humidity, setHumidity] = useState()
    

    const postFetch = async () => {
        

        const response = await fetch(`${DEFAULTURL}${userInput}`)
        const data = await response.json()
        console.log(data)
        setTemp(data.current.temp_c)
        setDisplayCity(data.location.name)
        setIconSrc(data.current.condition.icon)

        setCondition(data.current.condition.text)
        setWind(data.current.wind_mph)
        setHumidity(data.current.humidity)

    }


        return (
            <div className="pt-24 border-2 h-screen bg-gradient-to-b from-indigo-900 to-indigo-500">
                <h1 className="text-2xl text-center pb-6 text-white sm:text-4xl sm:pb-0">Find out the weather near or far!</h1>
                <Card postFetch={postFetch} setUserInput={setUserInput} userInput={userInput} displayCity={displayCity} temp={temp} iconSrc={iconSrc} condition={condition} wind={wind} humidity={humidity}/>
            </div>
        )
    
}

export default App