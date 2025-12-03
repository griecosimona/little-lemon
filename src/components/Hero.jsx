import Button from "./Button.jsx";
import Dished from "../assets/dished.jpg";
import React from "react";

export default function Hero() {
    return (
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
                            <Button>
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
    )
}