import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";

export default function AppContainer() {
    return (
        <div>
            <h1>This is the COntainer Component for the Application....</h1><hr/>
            <HeaderComponent></HeaderComponent><hr/>
            <ContentComponent></ContentComponent><hr/>
            <FooterComponent></FooterComponent><hr/>
        </div>
    )
}