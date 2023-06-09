import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setCity } from '../../redux/forecastReducer';
const CityForm: React.FC = () => {
    const dispatch = useAppDispatch()
    let [searchValue, changeSearchValue] = useState('')
    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearchValue(e.currentTarget.value)
    }
    const onSybmitSearchValue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setCity(searchValue))
        window.scrollTo({ top: 0, behavior: 'smooth' });
        changeSearchValue('')
    }
    return (
        <form onSubmit={onSybmitSearchValue} className="location-container">
            <div className="location__serch">
                <input
                    className="search-input"
                    onChange={onChangeSearchValue}
                    type="text"
                    value={searchValue}
                />
            </div>
            <button type='submit' className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
        </form>
    )
}
export default CityForm