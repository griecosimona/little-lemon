export default function Button(props) {
    return (
        <button className="bg-secondary-500 text-black font-heading py-3 px-6 rounded-xl mt-4 hover:bg-secondary-600 transition cursor-pointer">
            {props.children}
        </button>
    )
}