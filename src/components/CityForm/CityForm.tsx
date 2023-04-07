import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { fetchForecastsList } from '../../redux/forecastReducer';
// import Week from './week/Week';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { forecastOfDay } from '../types/types';
const CityForm: React.FC = () => {
    const dispatch = useAppDispatch()
    let [searchValue, changeSearchValue] = useState('')
    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearchValue(e.currentTarget.value)
    }
    const onSybmitSearchValue = () => {
        debugger
        dispatch(fetchForecastsList(searchValue))
    }
    return (
        <form onSubmit={onSybmitSearchValue} className="location-container">
            <input
                className="search-input"
                onChange={onChangeSearchValue}
                type="text"
                value={searchValue}
            />
            <button type='submit' className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
        </form>
    )
}
export default CityForm