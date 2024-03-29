import {
    collection,
    doc,
    getDocs,
    increment,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { db } from "./firebaseConfiguration";
  
  export const submitResponse = async (form, response) => {
    try {
      
  
      
  
      const responsesRef = collection(db, "forms", form.id, "responses");
      const responseRef = doc(responsesRef);
  
      setDoc(responseRef, response);
  
      const formRef = doc(db, "forms", form.id);
      updateDoc(formRef, {
        responses: increment(1),
      });
  
      return { responseId: responseRef.id };
    } catch (error) {
      console.log(error);
      return { error: { message: "Error al guardar las respuestas" } };
    }
  };
  
  export const getResponses = (formId, callback) => {
    const responsesRef = collection(db, "forms", formId, "responses");
  
    const q = query(responsesRef);
  
    return onSnapshot(q, (snapshot) => {
      const responses = snapshot.docs.map((doc) => {
        const response = doc.data();
        response.id = doc.id;
        return response;
      });
  
      callback(responses);
    });
  };
  
  export const checkUserHasResponses = async (formId, userId) => {
    try {
      const responsesRef = collection(db, "forms", formId, "responses");
      const q = query(responsesRef, where("user.id", "==", userId));
  
      const snapshot = await getDocs(q);
  
      return snapshot.docs.length > 0;
    } catch (error) {
      return true;
    }
  };
  