import Head from 'next/head'
import Header from './navbar'
import Footer from './footer'
import favicon from '../public/VD.ico'
import Banner from '../images/300835790_444611184351716_6625068512432527425_n.jpg'

export const config = {amp: true}

export default function Layout({children}) {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Expires" content="0" />
                <meta httpEquiv="Last-Modified" content="0" />
                <meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta name="description" content="Variety Dubs es una empresa de doblaje en Latinoamerica con sede en México"/>
                <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
                <meta name="keywords" content="Doblaje, Variety Dubs, Actuacion de voz, peliculas, series, audiolibros, comics, narracion, radio, television, internet" />
                <meta property="og:title" content="Variety Dubs" />
                <meta property="og:type" content="article" />
                <meta property="og:description" content=" Estudio de doblaje con sede en México" />
                <meta property="og:url" content="" />
                <meta property="og:image" content={Banner} />
                <meta property="og:site_name" content="Variety Dubs" />
                <meta name="twitter:title" content="Variety Dubs " />
                <meta name="twitter:description" content=" Estudio de doblaje con sede en México" />
                <meta name="twitter:image" content={Banner} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image:alt" content="variety-banner" />
                <link rel="shortcut icon" href={favicon.src} />
                <title>Variety Dubs</title>
            </Head>
            <div className='flex flex-col min-h-screen'>
               <Header/>
                    <main className='flex-1 flex flex-col flex-wrap'>
                        {children}
                    </main>
                <Footer/> 
            </div>
            

        </>
    )
}