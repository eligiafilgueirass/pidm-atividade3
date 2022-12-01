import {
    getDocs,
    collection,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
  } from "firebase/firestore";
  
  import { onSnapshot } from "firebase/firestore";
  
  class ProfessorService {
    static listar = (firestoreDb, callback) => {
      getDocs(collection(firestoreDb, "professor"))
        .then((snapshot) => {
          const professores = [];
          snapshot.forEach((document) => {
            const id = document.id;
            const { nome, curso, salario } = document.data();
            professores.push({ id, nome, curso, salario });
          });
          callback(professores);
        })
        .catch((error) => console.log(error));
    };
  
    static listar_onSnaphot = (firestoreDb, callback) => {
      const q = query(collection(firestoreDb, "professor"));
      onSnapshot(q, (querySnaphot) => {
        const professores = [];
        querySnaphot.forEach((document) => {
          const id = document.id;
          const { nome, curso, salario } = document.data();
          professores.push({ id, nome, curso, salario });
        });
        callback(professores);
      });
    };
  
    static criar = (firestoreDb, callback, professor) => {
      addDoc(collection(firestoreDb, "professor"), professor)
        .then((docRef) => {
          callback(docRef.id);
        })
        .catch((error) => console.log(error));
    };
  
    static recuperar = (firestoreDb, callback, id) => {
      getDoc(doc(firestoreDb, "professor", id))
        .then((docSnap) => {
          if (docSnap.exists()) {
            callback(docSnap.data());
          }
        })
        .catch((error) => console.log(error));
    };
  
    static atualizar = (firestoreDb, callback, id, professor) => {
      updateDoc(doc(firestoreDb, "professor", id), professor)
        .then(() => {
          callback();
        })
        .catch((error) => console.log(error));
    };
  
    static apagar = (firestoreDb, callback, id) => {
      deleteDoc(doc(firestoreDb, "professor", id))
        .then(() => callback(true))
        .catch((error) => console.log(error));
    };
  }
  
  export default ProfessorService;