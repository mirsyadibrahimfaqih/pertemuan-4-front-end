import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../Main/Movies";
import Navbar from "../components/Navbar/Navbar";
function Main() {
    return (
        <main>
            <Hero/>
            <Movies />
            </main>
           
   
    );
}

function Home() {
    return (
        <>
        <Navbar />
        <Main />
        <Footer />
        </>
    )
}

export default Home;
