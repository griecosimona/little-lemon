import React from "react";
import DishCard from "./components/DishCard.jsx";
import Salad from "./assets/greek salad.jpg"
import Bruschetta from "./assets/bruschetta.svg"
import LemonDessert from "./assets/lemon dessert.jpg"
import Button from "./components/Button.jsx";

export default function Index() {
    return (
        <>
            <section>
                <div className="md:mt-20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                        <h2 className="font-heading text-4xl md:text-5xl text-primary">
                            This week's specials!
                        </h2>
                        <div>
                            <Button>
                                Online Menu
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid gid-cols-1 md:grid-cols-3 gap-10 mt-6">
                    <DishCard image={Salad} title={"Greek Salad"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                              price={"$12.99"} />
                    <DishCard image={Bruschetta} title={"Bruschetta"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}
                              price={"$5.99"} />
                    <DishCard image={LemonDessert} title={"Lemon Dessert"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                              price={"$5.00"} />
                </div>
            </section>
        </>
    );
}