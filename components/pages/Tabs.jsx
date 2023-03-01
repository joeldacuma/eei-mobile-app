import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Feed';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Employee from './Employee';
import Settings from './Settings';
import TimeReport from './TimeReport';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/feed" render={() => <Home />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/lists/:listId/dtr" render={() => <TimeReport />} exact={true} />
        <Route path="/tabs/employees/:employeeId" render={() => <Employee />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/lists" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {/* <IonTabButton tab="tab1" href="/tabs/feed">
          <IonIcon icon={flash} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="tab2" href="/tabs/lists">
          <IonIcon icon={list} />
          <IonLabel>Groups</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
