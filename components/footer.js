export default function Footer() {
    return (
        <>
            <footer className="bg-gray-700 text-white py-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                <div className="w-full md:w-2/6 text-center md:text-left">
                    <h4 className="text-lg font-medium">Contact Us</h4>
                    <p className="text-sm">
                    Email: contact@example.com
                    <br />
                    Phone: 555-555-5555
                    <br />
                    Address: 123 Main St, Anytown USA
                    </p>
                </div>
                <div className="w-full md:w-2/6 text-center md:text-left">
                    <h4 className="text-lg font-medium">Follow Us</h4>
                    <ul className="list-reset text-sm">
                    <li className="mb-2">
                        <a href="#" className="text-white hover:text-indigo-400">
                        Facebook
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-white hover:text-indigo-400">
                        Twitter
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-white hover:text-indigo-400">
                        Instagram
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="w-full md:w-2/6 text-center md:text-left">
                    <h4 className="text-lg font-medium">Legal</h4>
                    <ul className="list-reset text-sm">
                    <li className="mb-2">
                        <a href="/disclaimer" className="text-white hover:text-indigo-400">
                        Disclaimer
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                        href="/privacy-policy"
                        className="text-white hover:text-indigo-400"
                        >
                        Privacy Policy
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                        href="/terms-of-use"
                        className="text-white hover:text-indigo-400"
                        >
                        Terms of Use
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="flex justify-center mt-6">
                <p className="text-xs text-center">
                    Derechos Reservados © S.A de C.V Variety Dubs {new Date().getFullYear()}
                </p>
                </div>
            </div>
            </footer>
        </>
    )
}