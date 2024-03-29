import Bannerimage from "../images/stock-photo-microphone-in-studio-1048675802-transformed.jpeg"
import Leftimage from '../images/stock-photo-a-girl-works-with-a-microphone-recordings-audio-recording-on-the-radio-or-dubbing-an-audiobook-2145671861-transformed.jpeg'

export default function Home() {
  return (
    <>
      <section className="banner-container">
        <div className={`banner relative h-auto w-full banner-background bg-center bg-no-repeat bg-cover pt-96 pb-96`}>
          <div className="container mx-auto flex flex-wrap">
            <div className="w-12/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 py-5 px-10">
              <h1 className='relative text-5xl font-bold text-white text-left isolate z-10'>
                Variety Dubs
              </h1>
              <p className='relative text-2xl font-bold text-white text-left isolate z-10'>El mejor estudio de doblaje en<br />todo México.</p>
            </div>
            <div className="w-12/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12"></div>
          </div>
        </div>
      </section>
      <section className="first-content-row flex h-full">
          <div className="w-12/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12">
            <div className="container mx-auto pt-20 pb-20 px-10 lg:px-32 xl:px-32 2xl:px-32">
              <h2 className="text-5xl font-bold mb-5">¿Que es<br />Variety Dubs?</h2>
              <p className="mb-5">Bienvenidos a Variety Dubs, una empresa de doblaje en México con sede en Monterrey. Somos una empresa joven y ambiciosa, con un equipo de talentosos y entusiastas profesionales del doblaje.</p>
              <p className="mb-5">Estamos comprometidos en ofrecer servicios de doblaje de alta calidad a nuestros clientes, ya sea para películas, series de televisión, videojuegos o contenido educativo. Contamos con un equipo de profesionales especializados en diferentes idiomas y géneros, que trabajan incansablemente para garantizar que cada proyecto sea un éxito.</p>
              <p className="mb-5">Nuestra experiencia y pasión por el doblaje nos permite ofrecer un servicio personalizado y adaptado a las necesidades de cada cliente, y estamos siempre dispuestos a trabajar mano a mano con nuestros clientes para garantizar que el resultado final sea exactamente lo que están buscando.</p>
              <p className="mb-5">Además, estamos comprometidos con la innovación y la adopción de las últimas tecnologías para mejorar continuamente nuestros servicios y ofrecer una experiencia de doblaje de vanguardia.</p>
              <p className="mb-5">Si está buscando una empresa de doblaje en México con un equipo de talentosos profesionales y una atención al cliente excepcional, no dude en ponerse en contacto con nosotros. Estamos ansiosos por trabajar con usted en su próximo proyecto de doblaje.</p>
            </div>
          </div>
          <div className="w-4/12 hidden lg:block xl:block 2xl:block">
              <img className="object-cover object-center w-full" src={Leftimage.src} alt="girl dubbing"/>
          </div>
      </section>
      <style jsx>
        {
          `
            .banner-background {
              background-image: url(${Bannerimage.src});
              
            }
            .banner-background::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(50, 50, 50, 0.5);
            }
            .banner-background::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjgyMDA2NjJBNzExRTBCNjU1QzhBRDY1RUJCOUU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxNjgyMDA3NjJBNzExRTBCNjU1QzhBRDY1RUJCOUU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTE2ODIwMDQ2MkE3MTFFMEI2NTVDOEFENjVFQkI5RTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTE2ODIwMDU2MkE3MTFFMEI2NTVDOEFENjVFQkI5RTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UWbiJAAAAHUlEQVR42mJiYGD4DwQggoEJSDAyQAETAxIACDAAJMMJ/r07h+kAAAAASUVORK5CYII=');
            }
          `
        }
      </style>
    </>
  )
}
