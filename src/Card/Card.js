import CELSIUS from '../images/315981_celsius_degree_icon.png'
import WIND from '../images/3741354_weather_wind_windy_icon.png'
import HUMIDITY from '../images/5729388_fog_foggy_forecast_weather_icon.png'

function Card({userInput, setUserInput, postFetch, temp, displayCity, iconSrc, condition, wind, humidity}){

    return (
        <div className=''>
            <div className='pt-12 text-center'>
                <input placeholder='new york' className='border-2 h-12 w-64 rounded-2xl text-2xl pl-2 sm:w-80 sm:h-16' type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
                <button onClick={postFetch} className='border-2 ml-8 rounded-full h-12 w-12 bg-white sm:w-16 sm:h-16'>🔍</button>
            </div>
            <div className='result text-center pt-8 pb-4 sm:pt-2'>
                <div className='flex justify-center h-24'>
                    {iconSrc && <img className='h-32 sm:h-44' src={iconSrc} alt='' />}
                </div>
                <h1 className='text-white text-2xl pt-2 h-16 sm:pt-12 sm:text-3xl'>{condition}</h1>
                <div className='flex justify-center text-center w-full sm:pt-8          '>
                    {temp && <h1 className='text-6xl text-blue-500'>{temp}</h1>}
                    <img alt='' src={CELSIUS} className='h-16'></img>
                </div>
                <h1 className='text-white text-6xl pt-4 h-16'>{displayCity}</h1>
            </div>
            <div className='extraResult flex pt-16 space-x-24 sm:justify-center'>
                <div className='flex pl-4'>
                    <img className='h-12' src={HUMIDITY} alt='' />
                    <h1 className='text-white text-3xl pt-1 sm:text-4xl'>{humidity}%</h1>
                </div>
                <div className='flex'>
                    <img className='h-12' src={WIND} alt='' />
                    <h1 className='text-white text-3xl pt-1 sm:text-4xl'>{wind} mph</h1>
                </div>
            </div>
            <div className='text-xl text-white flex space-x-32 pl-12 sm:justify-center sm:text-2xl'>
                <h1>Humidity</h1>
                <h1>Wind speed</h1>
            </div>
        </div>
    )
}

export default Card