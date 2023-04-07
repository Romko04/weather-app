export type forecastOfDay = {
    dataTime: string
    description: string | string[]
    icon: string | string[]
    temp: number
    feelsLike: number
    speedWind: number
}
export interface forecastsState {
    city: string
    forecasts: forecastOfDay[]
    activeIndexForecast: number
}
export type averageValueByDateType = {
    description: string[]
    icon: string[]
    temp: number
    feelsLike: number
    speedWind: number
    count: number
}
export type averageValuesByDateType = {
    [key: string]: averageValueByDateType
}
export type ResponseDataType = {
    city: { name: string }
    cod: string
    messages: number
    cnt: number
    list: ResponseItem[]
}
export type ResponseItem = {
    dt_txt: string
    main: {
        temp: number
        feels_like: number
    };
    weather: {
        main: string
        icon: string
    }[]
    wind: {
        speed: number
    }
}
export type WeatherSideType = {
    forecasts:forecastOfDay[]
    city: string
}