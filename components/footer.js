import Link from 'next/link'

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
                        <Link href="#" className="text-white hover:text-indigo-400">
                        Facebook
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" className="text-white hover:text-indigo-400">
                        Twitter
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" className="text-white hover:text-indigo-400">
                        Instagram
                        </Link>
                    </li>
                    </ul>
                </div>
                <div className="w-full md:w-2/6 text-center md:text-left">
                    <h4 className="text-lg font-medium">Legal</h4>
                    <ul className="list-reset text-sm">
                    <li className="mb-2">
                        <Link href="/disclaimer" className="text-white hover:text-indigo-400">
                        Disclaimer
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                        href="/privacy-policy"
                        className="text-white hover:text-indigo-400"
                        >
                        Privacy Policy
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                        href="/terms-of-use"
                        className="text-white hover:text-indigo-400"
                        >
                        Terms of Use
                        </Link>
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