import React, {useContext} from "react";
import { Switch, Route} from "react-router-dom";
import { __RouterContext } from "react-router";
import Accueil from "./components/Accueil";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import MonCV from "./components/MonCV";
import Contact from "./components/Contact";
import {useTransition, animated} from 'react-spring'


const Router = () => {

  const {location}= useContext (__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)"},
    leave: { opacity: 0, transform: "translate(-50%,0)"},
  });
  
  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/Accueil" component={Accueil} />
            <Route exact path="/Parcours" component={Parcours} />
            <Route exact path="/Projets" component={Projets} />
            <Route exact path="/MonCV" component={MonCV} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Router;
