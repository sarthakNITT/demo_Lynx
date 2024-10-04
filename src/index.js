// import firebase from '@react-native-firebase/app';
import { Provider } from 'mobx-react';
import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { scale, verticalScale } from 'react-native-size-matters';
import { ToastProvider } from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomStatusBar from './components/statusBar';
import Navigator from './navigation';
import * as color from './utils/colors';
// import { USER_STORE } from './mobx/USER_STORE';
// import notifee, { AuthorizationStatus } from '@notifee/react-native';
// import messaging from '@react-native-firebase/messaging';

const App=()=>{
  // useEffect(()=>{

  //   const firebaseConfig = {
  //     apiKey: "AIzaSyBFRzMTRcuWDu4x_zGtRIX9RQAeCLYf3Lo",
  //     authDomain: "nitt-app-b8826.firebaseapp.com",
  //     projectId: "nitt-app-b8826",
  //     storageBucket: "nitt-app-b8826.appspot.com",
  //     messagingSenderId: "1022354282796",
  //     appId: "1:1022354282796:android:15bbb296cf81ff2d587489",
  //     measurementId: "G-RT7PSXHVY9",
  //     databaseURL: "https://nitt-app-b8826.firebaseio.com"
  //   };

  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig, 'lynx');
  //   }

  //   async function createNotificationChannel() {
  //     try {
  //       // Create a notification channel
  //       const channelId = await notifee.createChannel({
  //         id: 'NITTAPP',
  //         name: 'EventUpdates',
  //         sound: 'default', // Optional, use 'default' or custom sound file
  //         importance: AndroidImportance.HIGH, // High importance: 5
  //         vibration: true, // Enable vibration
  //       });

  //       console.log(`Notification channel created with ID: ${channelId}`);
  //     } catch (error) {
  //       console.log('Error creating notification channel:', error);
  //     }
  //   }

  //   // Call the function when component mounts
  //   createNotificationChannel();

  //   if (Platform.OS == 'ios') {
  //     USER_STORE.setFirebaseToken('123abc');
  //   }

  //   async function requestUserPermission() {
  //     const settings = await notifee.requestPermission({
  //       sound: true,
  //       alert: true,
  //     });

  //     if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
  //       console.log('User denied permissions for notifications');
  //     } else if (settings.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
  //       console.log('Notification permissions granted.');
  //     }
  //   }

  //   // Function to process incoming notifications
  //   async function ProcessNotification(notification) {
  //     console.log('pressed');
  //     console.log('NOTIFICATION:', notification);
  //     // Call event description screen with event id as notification.data.eventId
  //     // your logic for handling the event based on the notification
  //   }

  //   // Get Firebase Token
  //   const getFirebaseToken = async () => {
  //     const token = await messaging().getToken();
  //     console.log('TOKEN:', token);
  //     USER_STORE.setFirebaseToken(token);
  //   };

  //   // Handle background and foreground notifications
  //   const handleForegroundNotification = async (message) => {
  //     console.log('Foreground NOTIFICATION:', message);
  //     ProcessNotification(message);
  //   };

  //   // Request notification permissions
  //   requestUserPermission();

  //   // Fetch Firebase Token
  //   getFirebaseToken();

  //   // Listen for messages when app is in foreground
  //   const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', remoteMessage);
  //     await notifee.displayNotification({
  //       title: remoteMessage.notification.title,
  //       body: remoteMessage.notification.body,
  //       data: remoteMessage.data,
  //     });
  //     handleForegroundNotification(remoteMessage);
  //   });

  //   // Listen for notification tap action
  //   notifee.onBackgroundEvent(async ({ type, detail }) => {
  //     if (type === notifee.EventType.ACTION_PRESS) {
  //       console.log('Notification action pressed', detail.notification);
  //       ProcessNotification(detail.notification);
  //     }
  //   });

  //   // Cleanup listeners on component unmount
  //   return () => {
  //     unsubscribeOnMessage();
  //   };
  // },[])
  return (
    <Provider>
      <ToastProvider
        placement="top"
        duration={3500}
        animationType="slide-in"
        offset={verticalScale(300)}
        successColor={color.successColor}
        dangerColor={color.dangerColor}
        warningColor={color.warningColor}
        textStyle={{ fontSize: scale(14) }}
        warningIcon={<Icon name="alert-triangle" size={25} color={'white'} />}
        successIcon={<Icon name="check" color={'white'} size={25} />}
        dangerIcon={
          <MaterialIcons name="dangerous" size={25} color={'white'} />
        }
        swipeEnabled={true}>
        <CustomStatusBar />
        <Navigator />
      </ToastProvider>
    </Provider>
  );
}

// export default App;
const LightTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: color.Primary,
    accent: color.Secondary,
  },
};

const Main=()=>{
  return (
    <PaperProvider theme={LightTheme}>
      <App />
    </PaperProvider>
  );
}

export default Main;