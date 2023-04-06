import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export type forecastOfDay = {
  dataTime: string
  description: string | string[]
  icon: string | string[]
  temp: number
  feelsLike: number
  speedWind: number
}
interface SetForecastsPayload {
  city: string;
  forecasts: Array<forecastOfDay>;
}
export interface forecastsState {
  city: string
  forecasts: forecastOfDay[]
}
const initialState: forecastsState = {
  city: '',
  forecasts: []
}

export const forecastsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setForecasts: (state, action: PayloadAction<SetForecastsPayload>) => {
      state.forecasts = action.payload.forecasts
      state.city = action.payload.city
    }
  },
})

export const { setForecasts } = forecastsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default forecastsSlice.reducer