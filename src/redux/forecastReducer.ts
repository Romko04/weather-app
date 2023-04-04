import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export type forecastOfDay = {
    dataTime: number
    description: string
    icon: string
    temp: string
    feelsLike: string
    speedWind: number
}
interface forecastsState {
  city: string
  forecasts: forecastOfDay[]
}
const initialState: forecastsState = {
  city:'',
  forecasts: []
}

export const forecastsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setForecasts: (state, action: PayloadAction<forecastOfDay[]>) => {
      debugger
        state.forecasts = action.payload
      },
  },
})

export const { setForecasts} = forecastsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default forecastsSlice.reducer