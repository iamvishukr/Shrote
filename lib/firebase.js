import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdXWD2OISd-Mjsin0aGZzCPzjB0kXgqjc",
  authDomain: "marsweb-3818a.firebaseapp.com",
  projectId: "marsweb-3818a",
  storageBucket: "marsweb-3818a.firebasestorage.app",
  messagingSenderId: "951842861602",
  appId: "1:951842861602:web:5aa6de1c95fa341f36907b",
  measurementId: "G-BNX90WM9MF"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { db , auth };

// Accounts
export const getAccounts = async () => {
  const snapshot = await getDocs(collection(db, "accounts"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const addAccount = async (data) => {
  return await addDoc(collection(db, "accounts"), data);
};
export const updateAccount = async (id, data) => {
  const docRef = doc(db, "accounts", id);
  return await updateDoc(docRef, data);
};
export const deleteAccount = async (id) => {
  const docRef = doc(db, "accounts", id);
  return await deleteDoc(docRef);
};

// Customers
export const getCustomers = async () => {
  const snapshot = await getDocs(collection(db, "customers"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const addCustomer = async (data) => {
  return await addDoc(collection(db, "customers"), data);
};
export const updateCustomer = async (id, data) => {
  const docRef = doc(db, "customers", id);
  return await updateDoc(docRef, data);
};
export const deleteCustomer = async (id) => {
  const docRef = doc(db, "customers", id);
  return await deleteDoc(docRef);
};

// Legal Documents
export const getLegalDocuments = async () => {
  const snapshot = await getDocs(collection(db, "legalDocuments"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const addLegalDocument = async (data) => {
  return await addDoc(collection(db, "legalDocuments"), data);
};
export const updateLegalDocument = async (id, data) => {
  const docRef = doc(db, "legalDocuments", id);
  return await updateDoc(docRef, data);
};
export const deleteLegalDocument = async (id) => {
  const docRef = doc(db, "legalDocuments", id);
  return await deleteDoc(docRef);
};

// Transactions
export const getTransactions = async () => {
  const snapshot = await getDocs(collection(db, "transactions"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
export const addTransaction = async (data) => {
  return await addDoc(collection(db, "transactions"), data);
};
export const deleteTransaction = async (id) => {
  const docRef = doc(db, "transactions", id);
  return await deleteDoc(docRef);
};

// Company Info
export const getCompanyInfo = async () => {
  const docRef = doc(db, "companyInfo", "main");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};
export const saveCompanyInfo = async (data) => {
  const docRef = doc(db, "companyInfo", "main");
  return await setDoc(docRef, data, { merge: true });
};
