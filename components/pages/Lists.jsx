import Store from '../../store';
import * as selectors from '../../store/selectors';
import styles from '../../styles/lists.module.css';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonImg,
  IonRow,
  IonTitle
} from '@ionic/react';

const ListEntry = ({ list, ...props }) => (
  <IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

const AllLists = ({ onSelect }) => {
  const lists = Store.useState(selectors.getLists);

  return (
    <>
    {lists.map((list, i) => (
        <ListEntry list={list} key={i} />
    ))}
    </>
  );
};

const Lists = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>
          <IonImg className={styles.toolbarImg} src="/img/EEI.jpeg" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonRow className={styles.toolHeader}>
              <IonImg className={styles.toolbarImg} src="/img/EEI.jpeg" />
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <IonList className="py-4">
          <AllLists />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
