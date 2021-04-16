import Logo from "./components/Logo";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import {Route, Switch} from "react-router-dom";
import PostView from "./components/PostView";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Layout>
            <Logo />

            <Switch>
                <Route path="/post/:id" component={PostView} />
                <Route exact path="/" component={Posts} />
            </Switch>

            <Footer />
        </Layout>
    </>
  );
}

export default App;
