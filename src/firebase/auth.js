// functions for authentication and authorization
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./config";
import { doc, getDoc, setDoc } from "firebase/firestore";

// sign up with email
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredntial = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredntial.user;
    await createProfileDocument(user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// sign in
export const signInWithEmail = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await createProfileDocument(user);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

// sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// create a profile document for the user
export const createProfileDocument = async (user) => {
  try {
    const profileRef = doc(db, "users", user.uid, "profile", user.uid);
    if (await getDoc(profileRef).then((doc) => doc.exists())) {
      return;
    } else {
      await setDoc(
        profileRef,
        {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          createdAt: user.metadata.creationTime,
          role: "user",
          address: "",
          phoneNumber: "",
          providerId: user.providerData[0].providerId,
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error("Error creating profile document:", error);
  }
};

// fetch user profile
export const fetchUserProfile = async (userId) => {
  try {
    const userProfileRef = doc(db, "users", userId, "profile", userId);
    const userProfileSnapshot = await getDoc(userProfileRef);
    return userProfileSnapshot.data();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// observe auth state
export const observeAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
