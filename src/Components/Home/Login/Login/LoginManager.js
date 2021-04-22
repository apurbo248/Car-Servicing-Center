import firebase from 'firebase'
import firebaseConfig from './firebaseConfig.js';
 
export  const initiateLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSIgnInHandler= ()=> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res =>{
      console.log(res)
        let {displayName, email} = res.user
        const signedInUser = {
            isSignedIn : true,
            name: displayName,
            email:email,
            success : true
        }
        // token();
        return signedInUser;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
}

// const token=()=>{
//   firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
//     sessionStorage.setItem('token',idToken);
//   }).catch(function(error) {
  
//   });
//  }
export const facebookSignInHandler = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const user = res.user;
      console.log('fb user after sign in:' ,user);
      const {displayName, photoURL, email,R } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: R,
          };
          return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
