import Hero from "../components/Hero";
import Summary from "../components/Summary";

import "../styles/content-wrapper.css";

function HomeView() {
    return (
        <div className="content-wrapper">
            <Hero />
            <Summary />
        </div>

    )
}

export default HomeView;