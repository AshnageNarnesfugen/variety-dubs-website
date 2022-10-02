import logo from './V.png'

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="flex bg-slate-200 fixed w-full">
                    <div className="icon-container w-64 flex justify-center"> 
                        <img className="object-contain object-center" src={logo.src} alt="Logo" width="50px" height="50px"/>
                    </div>
                    <div className="menu flex h-16">
                        <div className="item1 flex content-center items-center h-full mr-4">menu 1</div>
                        <div className="item2 flex content-center items-center h-full mr-4">menu 2</div>
                        <div className="item3 flex content-center items-center h-full mr-4">menu 3</div>
                        <div className="item4 flex content-center items-center h-full mr-4">menu 4</div>
                        <div className="item5 flex content-center items-center h-full mr-4">menu 5</div>
                    </div>
                </nav>
            </header>
        </>
    )
}