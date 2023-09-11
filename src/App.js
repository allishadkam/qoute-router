import {Route , Switch , Redirect} from "react-router-dom"
import React,{Suspense} from "react";

import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import NewQoute from './pages/NewQoute'
import NotFound from './pages/NotFound'
import QuoteDetaile from "./pages/QuoteDetaile";


//const AllQuotes=React.lazy(()=>{import("./pages/AllQuotes")})
//const NewQoute=React.lazy(()=>{import("./pages/NewQoute")})
//const NotFound=React.lazy(()=>{import("./pages/NotFound")})
//const QuoteDetaile=React.lazy(()=>{import("./pages/QuoteDetaile")})


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
      <Switch>
      <Route path="/" exact><Redirect to="/qoutes"/></Route>
      <Route path="/qoutes" exact><AllQuotes/></Route>
      <Route path="/qoutes/:qouteid"><QuoteDetaile/></Route>
      <Route path="/new-qoute"><NewQoute/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
    </Suspense>
    </Layout>
    
  );
}

export default App;
