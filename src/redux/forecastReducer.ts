import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ResponseDataType, averageValuesByDateType, forecastOfDay, forecastsState } from '../types/types'
import axios from 'axios'
export const fetchForecastsList = createAsyncThunk(
  'forecastsSlice/fetchForecastsList',
  async (city: string) => {
    debugger
    let res = await axios.get<ResponseDataType>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e556ce8f19a6ec25f11d34d85c33652d&units=metric`)
    const averageValuesByDate: averageValuesByDateType = {}
    for (let i = 0; i < res.data.list.length; i++) {
      const Responseitem = res.data.list[i];
      const dataTime = Responseitem.dt_txt.split(" ")[0];
      if (averageValuesByDate[dataTime] === undefined) {
        averageValuesByDate[dataTime] = {
          temp: Responseitem.main.temp,
          description: [Responseitem.weather[0].main],
          feelsLike: Responseitem.main.feels_like,
          speedWind: Responseitem.wind.speed,
          icon: [Responseitem.weather[0].icon],
          count: 1
        };

      } else {
        averageValuesByDate[dataTime].temp += Responseitem.main.temp;
        averageValuesByDate[dataTime].description.push(Responseitem.weather[0].main)
        averageValuesByDate[dataTime].feelsLike += Responseitem.main.feels_like;
        averageValuesByDate[dataTime].speedWind += Responseitem.wind.speed;
        averageValuesByDate[dataTime].icon.push(Responseitem.weather[0].icon)
        averageValuesByDate[dataTime].count += 1;
      }


    }

    const forecastsList: forecastOfDay[] = [];

    for (const date in averageValuesByDate) {
      const averageTemp = averageValuesByDate[date].temp / averageValuesByDate[date].count;
      const averageFeelsLike = averageValuesByDate[date].feelsLike / averageValuesByDate[date].count;
      const averagespeedWind = averageValuesByDate[date].speedWind / averageValuesByDate[date].count;
      const icon = averageValuesByDate[date].icon[Math.floor((averageValuesByDate[date].icon.length) / 2)]
      const description = averageValuesByDate[date].description[(averageValuesByDate[date].description.length) / 2]
      forecastsList.push({
        dataTime: date,
        temp: Number(averageTemp.toFixed(2)),
        feelsLike: averageFeelsLike,
        speedWind: averagespeedWind,
        icon,
        description
      });
    }
    return { forecastsList, city }
  }
)
const initialState: forecastsState = {
  city: '',
  forecasts: [],
  activeIndexForecast: 0,
}
export const forecastsSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setActiveIndexForecast: (state, action: PayloadAction<number>) => {
      state.activeIndexForecast = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchForecastsList.pending, (state, action) => {
        // state.forecasts = []
        // state.loading = true
      })
    builder.addCase(
      fetchForecastsList.fulfilled, (state, action) => {
        debugger
        state.forecasts = action.payload.forecastsList
        state.city = action.payload.city
        // state.status = "success"
        // state.loading = false
      })
    builder.addCase(
      fetchForecastsList.rejected, (state, action) => {
        console.log('Errror');
        // state.status = "error"
        state.forecasts = []
        // state.loading = false
      })
  }
})

export const { setActiveIndexForecast } = forecastsSlice.actions
export default forecastsSlice.reducer