import Header from "../components/Header/Header"
import TopMenu from "../components/Menu/TopMenu"
import LongPoster from "../components/Poster/LongPoster"
import long_poster from '../images/long_poster.jpeg'

function InitialPage() {
    return (
        <>
            <Header />
            <TopMenu />
            <LongPoster poster={long_poster} altPoster={"Poster do Overwatch"} />
        </>
    )
}

export default InitialPage