import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonToggle,
    IonLabel,
    IonButtons,
    IonBackButton
  } from '@ionic/react';
  
  import Store from '../../store';
  import * as selectors from '../../store/selectors';
  import { useParams } from 'react-router-dom';
  
  const Employee = () => {
    const employees = Store.useState(selectors.getEmployees);
    const params = useParams();
    const { employeeId } = params;
    const employeeDetails = employees.filter(employee => employee.employeeNumber == employeeId)[0];

    return (
      <IonPage>
        <IonHeader>
         <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>{employeeDetails.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              Employee No: {employeeDetails?.employeeNumber}
            </IonItem>
            <IonItem>
              Position: {employeeDetails?.position}
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Employee;
  