// https://firebase.google.com/docs/web/learn-more#ways-to-add-web-sdks

const firebaseConfig = {
    apiKey: "AIzaSyCa2CBiVrTvIIAghBkFtSCE7qQ_xZaFHFs",
    authDomain: "chat-app-eb721.firebaseapp.com",
    projectId: "chat-app-eb721",
    storageBucket: "chat-app-eb721.appspot.com",
    messagingSenderId: "283100449591",
    appId: "1:283100449591:web:778ecd4cb6c17d087768b2",
    measurementId: "G-MQX1ZZWTMF"
};

function generateToken(){
    return (Math.random().toString(36) + Math.random().toString(36)).replaceAll('0.', "")
}

function createTimestamp(){
    let _date = new Date();
    let date = `${_date.getDate()}/${_date.getMonth() + 1}/${_date.getFullYear()}`;
    let time = `${String(_date.getHours()).padStart(2, '0')}:${String(_date.getMinutes()).padStart(2, '0')}:${String(_date.getSeconds()).padStart(2, '0')}`
    return `${date} at ${time}`
}

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);