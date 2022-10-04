import logo from './V.png'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavItem = ({ text, href, active}) => {
    return (
        <Link href={href}>
            <a className={`nav__item ${
                active ? 'active' : ''
            } px-5`}>
                {text}
            </a>
        </Link>
    )
}

const MENU_LIST = [
    {text: 'Inicio', href: '/'},
    {text: 'Perfiles', href: '/perfiles'},
    {text: 'Proyectos', href: '/proyectos'},
    {text: 'Videos', href: '/videos'},
    {text: 'Contactanos', href: '/contactanos'}
]

export default function Navbar() {
    const [cWH, setCWH] = useState('')
    const [bT, setBT] = useState(0)
    const [colorClass, setColorClass] = useState('text-white')
    const [blur, setBlur] = useState('backdrop-blur-none')
    const [activeIdx, setActiveIdx] = useState(-1);
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        setCWH(window.scrollY)
    }

    useEffect(() => {
        let bTV = cWH / 100;
        if (bTV < 1) {
            setBT(bTV)
        }
        if (window.scrollY > 100) {
            setColorClass('text-black')
            setBlur('backdrop-blur')
        } else {
            setColorClass('text-white')
            setBlur('backdrop-blur-none')
        }
    }, [cWH]);

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024 ) {
            setNavbarOpen(navbarOpen => false)
        }
    })

    const router = useRouter()

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
            <header>
                <nav className={`bg-slate-200 fixed w-full z-20 ${blur}`} style={{
                    background: `rgba(226, 232, 240, ${bT})`
                }}>
                    <div className="container mx-auto flex h-full justify-between items-center">
                        <div className="icon-container w-64 flex justify-center content-center items-center space-x-2">
                            <Link href={'/'}>
                                <a>
                                    <img className="object-contain object-center mt-3 mb-3" src={logo.src} alt="Logo" width="50px" height="50px"/>
                                </a>
                            </Link> 
                            <span className={`${colorClass}`}>Variety Dubs</span>
                        </div>
                        <div className={`desktop_menu h-16 hidden md:hidden lg:flex xl:flex 2xl:flex`}>
                            {
                                MENU_LIST.map((menu, idx) => (
                                    <div onClick={() => {
                                        setActiveIdx(idx)
                                        router.push(menu.href)
                                    }} key={menu.text} className={`item1 flex content-center items-center h-full mr-4 ${colorClass}`}>
                                        <NavItem active={activeIdx === idx} {...menu}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mobile_menu static lg:absolute">
                            <button className={`block lg:hidden mr-5 ${colorClass} text-4xl`} onClick={handleToggle}>{navbarOpen ? "⤬" : "⬱"}</button>
                            <ul className={`open close menuNav absolute left-0 top-[74px] w-full bg-slate-200 ${navbarOpen ? "block" : "hidden"} lg:hidden ${blur}`} style={{
                                background: `rgba(226, 232, 240, ${bT})`
                            }}>
                                {
                                    MENU_LIST.map((menu, idx) => (
                                        <li onClick={() => {
                                            setActiveIdx(idx)
                                            router.push(menu.href)
                                        }} key={menu.text} className={`ml-32 item1 flex content-center items-center h-full ${colorClass}`}>
                                            <NavItem active={activeIdx === idx} {...menu}/>
                                        </li>
                                    ))
                                }
                            </ul>   
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}