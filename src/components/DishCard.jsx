import Button from "./Button.jsx";

export default function DishCard({ image, title, price, description }) {
    return (
        <div className="bg-gray-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col border border-gray-200">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">

                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading text-xl text-primary">{title}</h3>
                    <span className="font-heading text-secondary font-bold">{price}</span>
                </div>

                <p className="font-body text-gray-700 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                <Button>
                    Order a delivery
                    <span className="text-xl ml-2">🚴‍♂️</span>
                </Button>

            </div>
        </div>
    );
}
