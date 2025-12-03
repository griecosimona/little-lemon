export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="bg-secondary-500 text-black font-heading py-3 px-6 rounded-xl mt-4 hover:bg-secondary-600 transition cursor-pointer z-20">
            {children}
        </button>
    )
}