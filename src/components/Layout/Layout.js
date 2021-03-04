import Auxiliary from "../../hoc/Auxiliary";
import "./Layout.scss";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
const Layout = (props) => (
  <Auxiliary>
    <TopNavBar />
    <main>{props.children}</main>
  </Auxiliary>
);
export default Layout;
