import Button from "./Button.jsx";
import React, {useEffect, useReducer, useState} from "react";

export function initializeTimes() {
    const today = new Date();
    return window.fetchAPI(today);
}

export function updateTimes(state, action) {
    if (action.type === "update_times") {
        const selectedDate = new Date(action.date);
        return window.fetchAPI(selectedDate);
    }
    return state;
}

export default function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [formIsValid, setFormIsValid] = useState(false);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);

        dispatch({
            type: "update_times",
            date: newDate,
        });
    };

    useEffect(() => {
        const isValid =
            date !== "" &&
            time !== "" &&
            guests >= 1 &&
            guests <= 10 &&
            occasion !== "";

        setFormIsValid(isValid);
    }, [date, time, guests, occasion]);


    const handleSubmit = (e) => {
        // SE IL FORM È INVALIDO, BLOCCA TUTTO
        if (!e.target.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        e.preventDefault();

        const formData = { date, time, guests, occasion };
        const success = window.submitAPI(formData);

        if (success && props.sonSuccess) {
            props.onSuccess();
        }
    };



    return (
        <>
            <form className="grid gap-4">
                <label htmlFor="res-date" className="font-heading text-sm text-primary">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res-date"
                    className="border rounded-lg p-2 font-body"
                    onChange={handleDateChange}
                    required
                />

                <label htmlFor="res-time" className="font-heading text-sm text-primary">
                    Choose time
                </label>
                <select
                    id="res-time"
                    className="border rounded-lg p-2 font-body"
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>

                <label htmlFor="guests" className="font-heading text-sm text-primary">
                    Number of guests
                </label>
                <input
                    id="guests"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={guests}
                    className="border rounded-lg p-2 font-body"
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />

                <label htmlFor="occasion" className="font-heading text-sm text-primary">
                    Occasion
                </label>
                <select
                    id="occasion"
                    className="border rounded-lg p-2 font-body"
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <Button onClick={(e) => handleSubmit(e)}>Make Your reservation</Button>

            </form>
        </>
    )
}