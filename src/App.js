import Logo from "./components/Logo";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import {Route, Switch} from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <>
        <Layout>
            <Logo />

            <Switch>
                <Route path="/post/:id" component={SinglePost} />
                <Route exact path="/" component={Posts} />
            </Switch>
        </Layout>
    </>
  );
}

export default App;
