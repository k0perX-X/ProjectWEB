import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    newDate,
    selectDate,
} from './clockSlice';


export function Clock() {
    const dispatch = useDispatch();
    const date = useSelector(selectDate);

    const updateClock = () => {
        dispatch(newDate()) // изменение состояния
        setInterval(updateClock, 1000);
    };

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const n = date.getDay();

    setInterval(updateClock, 1000);

    return (
        <div>
            <p>
                Сегодня: {days[n]}.
            </p>
            <p>
                Текущее время: {date.toLocaleTimeString()}
            </p>
        </div>
    );
}
