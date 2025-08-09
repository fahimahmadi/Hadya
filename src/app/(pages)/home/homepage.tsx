import Footer from "@/app/components/Footer";
import Banner from "./Banner";
import Categories from "./Categories";
import Feedbacks from "./Feedbacks";
import Popular from "./Popular";
import Subscribe from "./Subscribe";

const HomePage = () => {
    return (
        <>
            <Banner/>
            <Categories />
            <Popular />
            <Feedbacks />
            <Subscribe />
            <Footer />
        </>
    );
}

export default HomePage;