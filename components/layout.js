import Header from './navbar'
import Footer from './footer'

export default function Layout({children}) {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}