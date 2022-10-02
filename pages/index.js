import Layout from "../components/layout"
//import Bannerimage from "../images/stock-photo-microphone-in-studio-1048675802-transformed.jpeg"

export default function Home() {
  return (
    <Layout>
      <div className={`banner h-40 w-full`}>
        <h1 className='text-3xl font-bold underline text-black text-center'>
          Hello World
        </h1>
      </div>
    </Layout>
  )
}
