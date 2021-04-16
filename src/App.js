import Layout from "./components/Layout";
import Posts from "./components/Posts";
import {Route, Switch} from "react-router-dom";
import PostView from "./components/PostView";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
        <Layout>
            <Header />

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
