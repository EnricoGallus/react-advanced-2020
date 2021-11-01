import React, {useState} from 'react';
import {birthdayData} from './birthdayData';
import BirthdayCard from './birthdayCard'

const BirthdayReminder = () => {
    const [birthdays, setBirthdays] = useState(birthdayData);
    const todaysBirthday = birthdays.filter((data) => {
        let birthdayMonthDay = data.birthday.getMonth() + '-' + data.birthday.getDay();
        let today = new Date();
        let todayMonthDay = today.getMonth() + '-' + today.getDay();
        if (birthdayMonthDay === todayMonthDay) {
            return data;
        }
    })

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                {todaysBirthday.map((birthday) => <BirthdayCard key={birthday.id} data={birthday} />)}
                <button onClick={() => setBirthdays([])}>Clear All</button>
            </section>
        </>
    )
}

export default BirthdayReminder;