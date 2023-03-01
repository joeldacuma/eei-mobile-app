import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonButton,
  IonIcon
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { add, calendar } from 'ionicons/icons';

import Store from '../../store';
import * as selectors from '../../store/selectors';

const ListItems = ({ list }) => {
  return (
    <>
      <IonList>
        <IonListHeader>
          <IonLabel>EMPLOYEES</IonLabel>
        </IonListHeader>
        {(list?.members || []).map((item, key) => (
          <ListItemEntry list={list} item={item} key={key} />
        ))}
      </IonList>
      <div className="p-5">
        <IonButton fill="outline">
          <IonIcon icon={add} />
          ADD EMPLOYEE
        </IonButton>
        <IonButton routerLink={`/tabs/lists/${list.id}/dtr`} fill="outline">
          <IonIcon icon={add} />
          LOG DTR
        </IonButton>
      </div>

      <IonList>
        <IonListHeader>
          <IonLabel>HISTORY</IonLabel>
        </IonListHeader>
        <IonItem className="py-1" lines="inset">
          <div className="flex flex-row p-4">
            <IonIcon icon={calendar} slot="start" />
            <IonLabel className="mx-4">03/01/2023</IonLabel>
          </div>
          <IonButton size="small" fill="outline" slot="end">
            APPROVED
          </IonButton>
        </IonItem>

        <IonItem className="py-1" lines="inset">
          <div className="flex flex-row p-4">
            <IonIcon icon={calendar} slot="start" />
            <IonLabel className="mx-4">02/28/2023</IonLabel>
          </div>
          <IonButton color="danger" size="small" fill="outline" slot="end">
            REJECTED
          </IonButton>
        </IonItem>
      </IonList>
    </>
  );
};

const ListItemEntry = ({ list, item, ...props }) => (
  <IonItem routerLink={`/tabs/employees/${item.employeeNumber}`} className="list-entry">
    <IonLabel>{item.name}</IonLabel>
  </IonItem>
);

const ListDetail = ({ match }) => {
  const lists = Store.useState(selectors.getLists);
  const params = useParams();
  const { listId } = params;
  const loadedList = lists.find(l => l.id === listId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/lists" />
          </IonButtons>
          <IonTitle>{loadedList.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListItems list={loadedList} />
      </IonContent>
    </IonPage>
  );
};

export default ListDetail;
