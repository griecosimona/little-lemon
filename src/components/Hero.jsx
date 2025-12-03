import Button from "./Button.jsx";
import Dished from "../assets/dished.jpg";
import React, {useReducer, useState} from "react";
import Modal from "./Modal.jsx";

function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes() {
    return initializeTimes();
}

export default function Hero() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);

        dispatch({ type: "update_times", date: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FORM DATA:", {
            date,
            time,
            guests,
            occasion,
        });

        // In futuro: chiamata API
        // submitReservation({ date, time, guests, occasion })

        setOpen(false);
    };



    return (
        <>
            <section className="bg-primary-500">
                <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between">
                    <div className="grid gridcols-1 md:grid-cols-4 w-full">
                        <div className="col-span-2 flex flex-col justify-center">
                            <div className="font-heading text-5xl md:text-6xl text-secondary-500 tracking-wide">
                                Little Lemon
                            </div>

                            <div className="font-heading text-lg md:text-3xl text-white">
                                Chicago
                            </div>

                            <p className="mt-5 font-body text-white max-w-md leading-relaxed">
                                We are a family owned Mediterranean restaurant, focused on
                                traditional recipes served with a modern twist.
                            </p>

                            <div>
                                <Button onClick={() => setOpen(true)}>
                                    Reserve a Table
                                </Button>
                            </div>

                        </div>

                        <div className="hidden md:block relative col-span-2 md:justify-end mt-10 md:mt-0">
                            <div className="absolute top-0 right-0">
                                <img
                                    src={Dished}
                                    alt="Little Lemon dishes"
                                    className="rounded-xl w-90 h-90 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Reserve a Table"
            >
                <form className="grid gap-4">
                    <label htmlFor="res-date" className="font-heading text-sm text-primary">
                        Choose date
                    </label>
                    <input
                        type="date"
                        id="res-date"
                        className="border rounded-lg p-2 font-body"
                        onChange={handleDateChange}
                    />

                    <label htmlFor="res-time" className="font-heading text-sm text-primary">
                        Choose time
                    </label>
                    <select
                        id="res-time"
                        className="border rounded-lg p-2 font-body"
                        onChange={(e) => setTime(e.target.value)}
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
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        className="border rounded-lg p-2 font-body"
                        onChange={(e) => setGuests(e.target.value)}
                    />

                    <label htmlFor="occasion" className="font-heading text-sm text-primary">
                        Occasion
                    </label>
                    <select
                        id="occasion"
                        className="border rounded-lg p-2 font-body"
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <Button onClick={(e) => handleSubmit(e)}>Make Your reservation</Button>

                </form>
            </Modal>

        </>
    )
}