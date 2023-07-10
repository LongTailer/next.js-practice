import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

//Component : 各ページのコンポーネント
//pageProps : 各ページのprops
function MyApp({Component,pageProps}){
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp