import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="page-content">
                <Banner />
                { children }
            </div>
            <Footer />
        </>
    )
}
export default Layout;