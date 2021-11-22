import React from "react"
import Accueil from './pages/Accueil'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Connexion from "./backOffice/pages/Connexion";
import Office from "./backOffice/pages/AppBackOffice";
import ErrorPage from "./pages/ErrorPage";

import CouleurBack from "./backOffice/components/CouleurBack";
import ImageBack from "./backOffice/components/ImageBack";
import TexteBack from "./backOffice/components/TexteBack";
import ClientBack from "./backOffice/components/ClientBack";
import FactureBack from "./backOffice/components/FactureBack";
import InformationBack from "./backOffice/components/InformationBack";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/mmvtcconnexion" component={Connexion} />
            
            <Route path="/office" component={Office} />
            <Route path="/ChangeCouleur" component={CouleurBack} />
            <Route path="/ChangeImage" component={ImageBack} />
            <Route path="/ChangeTexte" component={TexteBack} />
            <Route path="/ClientBack" component={ClientBack} />
            <Route path="/FactureBack" component={FactureBack} />
            <Route path="/InformationBack" component={InformationBack} />
            
            <Route path="/" component={ErrorPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
