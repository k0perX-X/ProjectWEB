import React from 'react';
import {Clock} from './features/clock/Clock';
import {selectDate} from './features/clock/clockSlice'
import './App.css';
import {useSelector} from "react-redux";
import $ from "jquery";

$(function () {
    $("#" + $("#select option:selected").val()).show();
    $("#day-selecter").change(function () {
        $(".timetables").hide();
        $("#" + $(this).val()).show();
    });
});

function App() {
    const date = useSelector(selectDate);
    const days = [
        "all",
        "mon",
        'tue',
        "wed",
        "thu",
        "fri",
        "sat",
    ];
    const n = date.getDay();
    const display_settings = {
        "all": 'none',
        "mon": 'none',
        'tue': 'none',
        "wed": 'none',
        "thu": 'none',
        "fri": 'none',
        "sat": 'none',
    }
    display_settings[days[n]] = 'block'
    return (
        <div className="App">

            <h1>
                Базовое расписание на 2 модуль
            </h1>

            <Clock/>

            <div className="select">
                <label htmlFor="day-selecter" className="day">
                    Выберите день недели:
                </label>
                <select id="day-selecter">
                    <option className="day-option">Выберите вариант</option>
                    <option className="day-option" value="mon">Понедельник</option>
                    <option className="day-option" value="tue">Вторник</option>
                    <option className="day-option" value="wed">Среда</option>
                    <option className="day-option" value="thu">Четверг</option>
                    <option className="day-option" value="fri">Пятница</option>
                    <option className="day-option" value="sat">Суббота</option>
                    <option className="day-option" value="all">Все дни</option>
                </select>
            </div>

            <div className="tables">
                <div id="mon" className="timetables" style={{display: display_settings['mon']}}>
                    <table className="timetable">
                        <caption>Понедельник</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                        <tr>
                            <td>8:10</td>
                            <td>Машинное обучение (лекция)</td>
                            <td>124[2]</td>
                        </tr>
                        <tr>
                            <td>9:40</td>
                            <td>Груп. динамика и коммуник. в проф.практике прогр. инж</td>
                            <td>510[3]</td>
                        </tr>
                        <tr>
                            <td>13:10</td>
                            <td>Машинное обучение (практика)</td>
                            <td>504[3]</td>
                        </tr>
                        <tr>
                            <td>15:00</td>
                            <td>Обеспечение качества и тестирование</td>
                            <td>504[3]</td>
                        </tr>
                    </table>
                </div>
                <div id="tue" className="timetables" style={{display: display_settings['tue']}}>
                    <table className="timetable">
                        <caption>Вторник</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                        <tr>
                            <td>8:10</td>
                            <td>Обеспечение качества и тестирование</td>
                            <td>102[3]</td>
                        </tr>
                        <tr>
                            <td>9:40</td>
                            <td>НИС "Разработка мобильных приложений"</td>
                            <td>504[3]</td>
                        </tr>
                        <tr>
                            <td>16:40</td>
                            <td>НИС "Аналитика в IoT"</td>
                            <td>дист.</td>
                        </tr>
                    </table>
                </div>
                <div id="wed" className="timetables" style={{display: display_settings['wed']}}>
                    <table className="timetable">
                        <caption>Среда</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                        <tr>
                            <td>9:40</td>
                            <td>Обеспечение качества и тестирование</td>
                            <td>510[3]</td>
                        </tr>
                        <tr>
                            <td>11:30</td>
                            <td>Груп. динамика и коммуник. в проф.практике прогр. инж</td>
                            <td>102[3]</td>
                        </tr>
                    </table>
                </div>
                <div id="thu" className="timetables" style={{display:  display_settings['thu']}}>
                    <table className="timetable">
                        <caption>Четверг</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>МАЙНОР</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div id="fri" className="timetables" style={{display: display_settings['fri']}}>
                    <table className="timetable">
                        <caption>Пятница</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                        <tr>
                            <td>9:40</td>
                            <td>Web-программирование (практ.) (МКД)</td>
                            <td>дист.</td>
                        </tr>
                        <tr>
                            <td>11:30</td>
                            <td>Web-программирование (лекция) (МКД)</td>
                            <td>дист.</td>
                        </tr>
                    </table>
                </div>
                <div id="sat" className="timetables" style={{display: display_settings['sat']}}>
                    <table className="timetable">
                        <caption>Суббота</caption>
                        <tr>
                            <th>Время</th>
                            <th>Предмет</th>
                            <th>Кабинет</th>
                        </tr>
                    </table>
                </div>
                <div id="all" className="timetables" style={{display: display_settings['all']}}>
                    <div className="all-timetables">
                        <table className="timetable">
                            <caption>Понедельник</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                            <tr>
                                <td>8:10</td>
                                <td>Машинное обучение (лекция)</td>
                                <td>124[2]</td>
                            </tr>
                            <tr>
                                <td>9:40</td>
                                <td>Груп. динамика и коммуник. в проф.практике прогр. инж</td>
                                <td>510[3]</td>
                            </tr>
                            <tr>
                                <td>13:10</td>
                                <td>Машинное обучение (практика)</td>
                                <td>504[3]</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Обеспечение качества и тестирование</td>
                                <td>504[3]</td>
                            </tr>
                        </table>
                        <table className="timetable">
                            <caption>Вторник</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                            <tr>
                                <td>8:10</td>
                                <td>Обеспечение качества и тестирование</td>
                                <td>102[3]</td>
                            </tr>
                            <tr>
                                <td>9:40</td>
                                <td>НИС "Разработка мобильных приложений"</td>
                                <td>504[3]</td>
                            </tr>
                            <tr>
                                <td>16:40</td>
                                <td>НИС "Аналитика в IoT"</td>
                                <td>дист.</td>
                            </tr>
                        </table>
                        <table className="timetable">
                            <caption>Среда</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                            <tr>
                                <td>9:40</td>
                                <td>Обеспечение качества и тестирование</td>
                                <td>510[3]</td>
                            </tr>
                            <tr>
                                <td>11:30</td>
                                <td>Груп. динамика и коммуник. в проф.практике прогр. инж</td>
                                <td>102[3]</td>
                            </tr>
                        </table>
                        <table className="timetable">
                            <caption>Четверг</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td>МАЙНОР</td>
                                <td></td>
                            </tr>
                        </table>
                        <table className="timetable">
                            <caption>Пятница</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                            <tr>
                                <td>9:40</td>
                                <td>Web-программирование (практ.) (МКД)</td>
                                <td>дист.</td>
                            </tr>
                            <tr>
                                <td>11:30</td>
                                <td>Web-программирование (лекция) (МКД)</td>
                                <td>дист.</td>
                            </tr>
                        </table>
                        <table className="timetable">
                            <caption>Суббота</caption>
                            <tr>
                                <th>Время</th>
                                <th>Предмет</th>
                                <th>Кабинет</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
