import Logo from "../assets/frame-white.png";
export default function Footer() {
    return (
        <footer className="bg-primary-500">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                <div>
                    <img src={Logo} alt="Little Lemon logo" className="w-32 mb-4"/>
                </div>

                <div>
                    <h3 className="font-heading text-secondary-500 text-xl mb-4">Doormat Navigation</h3>
                    <ul className="space-y-2 font-body text-white/90">
                        <li className="hover:text-secondary cursor-pointer">Home</li>
                        <li className="hover:text-secondary cursor-pointer">About</li>
                        <li className="hover:text-secondary cursor-pointer">Menu</li>
                        <li className="hover:text-secondary cursor-pointer">Reservations</li>
                        <li className="hover:text-secondary cursor-pointer">Order Online</li>
                        <li className="hover:text-secondary cursor-pointer">Login</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-secondary-500 text-xl mb-4">Contact</h3>
                    <ul className="space-y-2 font-body text-white/90">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-secondary-500 text-xl mb-4">Social Media Links</h3>
                    <ul className="space-y-2 font-body text-white/90">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}