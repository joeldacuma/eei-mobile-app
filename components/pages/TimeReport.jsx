import React, { useRef, useEffect, useState } from 'react'; 
import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonAccordion,
    IonAccordionGroup,
    IonInput,
    IonDatetime,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonTextarea
  } from '@ionic/react';
import { add } from 'ionicons/icons';
import Store from '../../store';
import * as selectors from '../../store/selectors';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import styles from '../../styles/report.module.css';
  
const TimeReport = () => {
  const lists = Store.useState(selectors.getLists);
  const params = useParams();
  const { listId } = params;
  const loadedList = lists.find(l => l.id === listId);
  const [currentDate, setCurrentDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [activityListItems, setActivityListItems] = useState([0]);

  const activities = [
    {
      activityId: 'A',
      activityDescription: 'Installation of Extra bar slab'
    }, 
    {
      activityId: 'B',
      activityDescription: 'Installation of Rebar Stair'
    },
    {
      activityId: 'C',
      activityDescription: 'Installation of RC Wall'
    }
  ];
  const metrics = [
    'KGS',
    'LBS'
  ];

  const handleCalculateHours = () => {};

  const handleSubmit = () => {
    
  };
  
  const handleActivityListItems = () => {
    const items = activityListItems;
    const itemValue = items.concat(1);
    setActivityListItems(itemValue);
  };

  const EmployeesItems = ({ list }) => {

    return (
     <>
     <IonList>
      <IonListHeader>
        <IonLabel>DATE</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonInput type="date" value={currentDate} />
      </IonItem>
     </IonList>

      <IonList>
        <IonListHeader>
          <IonLabel>EMPLOYEES</IonLabel>
        </IonListHeader>
        <IonAccordionGroup>
        {(list?.members || []).map((item, key) => (
          <EmployeesAccordionGroup item={item} key={key} />
        ))}   
        </IonAccordionGroup>   
      </IonList>
      
      <IonList>
        <IonListHeader>ACTIVITY/DESC/QUANTITY</IonListHeader>
        {(activityListItems).map((list, key) => (
          <div className="py-2" key={key}>
            <ActivitySelectItems />
          </div>
        ))
        }
        <div className="text-right p-4">
          <IonButton size="small" onClick={handleActivityListItems}>
            Add
            <IonIcon icon={add} />
            </IonButton>
        </div>
      </IonList>

      <IonList>
        <IonListHeader>REMARKS</IonListHeader>
        <IonItem>
          <IonTextarea placeholder="Write a description..." />
        </IonItem>
      </IonList>

      <div className="text-center p-1">
        <IonButton expand="block">
          SIGNATURE  
         </IonButton>
      </div>

      <div className="text-center p-1">
          <IonButton routerLink={`/tabs/lists/${listId}`} expand="block">
            SUBMIT  
          </IonButton>
        </div>
     </>
    );
  };

  const ActivitySelectItems = () => (
    <>
    <IonItem>
      <IonSelect className={styles.select} interface="action-sheet" placeholder="Select Activity...">
        {
          (activities || []).map((activity, key) => (
            <IonSelectOption key={key} value={activity.activityId}>
              {activity.activityId} - {activity.activityDescription}
            </IonSelectOption>
          ))
        }
      </IonSelect>
    </IonItem>
    <IonItem>
      <IonLabel>Quantity:</IonLabel>
      <IonInput type="number" placeholder="Enter amount..." />
    </IonItem>
    <IonItem>
      <IonSelect className={styles.select} interface="action-sheet" placeholder="Select Unit...">
        {
          (metrics || []).map((metric, key) => (
            <IonSelectOption key={key} value={metric}>
              {metric}
            </IonSelectOption>
          ))
        }
      </IonSelect>
    </IonItem>
    </>
  );

  const EmployeesAccordionGroup = ({item, ...props }) => (
        <IonAccordion value={item?.employeeNumber}>
          <IonItem slot="header">
            <IonLabel>{item?.name}</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <IonItem fill="outline">
              <IonLabel>IN:</IonLabel>
              <IonDatetime presentation="time" />
            </IonItem>
            <IonItem fill="outline">
              <IonLabel>OUT:</IonLabel>
              <IonDatetime presentation="time" />
            </IonItem>
            <IonItem fill="outline">
              <IonLabel>OVERTIME:</IonLabel>
               <IonInput value={2} type="number" placeholder="Enter hours..." />
            </IonItem>
            <IonItem fill="outline">
              <IonLabel>TOTAL HOURS:</IonLabel>
               <IonInput placeholder="10" type="number" disabled={true} />
            </IonItem>
            <div className="text-center p-4">
              <IonButton size="small" shape="round" onClick={() => handleCalculateHours()}>Calculate</IonButton>
            </div>
          </div>
        </IonAccordion>
    );

    return (
      <IonPage>
        <IonHeader>
         <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>DAILY TIME REPORT</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <EmployeesItems list={loadedList} />
        </IonContent>
      </IonPage>
    );
  };
  
  export default TimeReport;
  