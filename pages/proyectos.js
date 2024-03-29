import Bannerimage from "../images/stock-photo-african-video-editor-working-with-footage-and-sound-editing-new-project-cutting-film-montage-1992294521-transformed.jpeg"
import alexis from '../images/1590124259172.jpg'

export default function proyectos() {
  return (
    <>
      <section className="banner-container">
        <div className={`banner relative h-auto w-full banner-background bg-center bg-no-repeat bg-cover pt-96 pb-96`}>
          <div className="container mx-auto flex flex-wrap">
            <div className="w-12/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 py-5 px-10">
              <h1 className='relative text-5xl font-bold text-white text-left isolate z-10'>
                Proyectos
              </h1>
              <p className='relative text-2xl font-bold text-white text-left isolate z-10'>
                Un feed de proyectos audiovisuales a futuro<br/>que se llevaran a cabo proximamente
              </p>
            </div>
            <div className="hidden md:w-6/12 md:block lg:block xl:block 2xl:block"></div>
          </div>
        </div>
      </section>
      <section className="first-content-row flex h-full">
          <div className="w-full">
            <div className="container mx-auto pt-20 pb-20 px-10 lg:px-32 xl:px-32 2xl:px-32">
              <h2 className="text-5xl font-bold mb-5">Nuestros<br />Proyectos</h2>
              {/*
              <div className="w-full text-center">
                <h2 className="text-center text-5xl font-bold mb-5">Proximamente...</h2>
              </div>
              */}
              
              <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium mb-4">Voiceover Project Title</h2>
              <p className="text-gray-700 mb-4">A brief description of the voiceover project, including the language and target audience.</p>
              <div className="flex items-center mb-4">
                <img src={alexis.src} alt="Voiceover Artist" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-700 font-medium">Alexis Cantu Avila</p>
                  <p className="text-gray-600">Director</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-600">Language: Spanish</p>
                </div>
                <div>
                  <p className="text-gray-600">Duration: 5:00</p>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Listen to Sample</a>
              </div>
            </div>
            </div>
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
