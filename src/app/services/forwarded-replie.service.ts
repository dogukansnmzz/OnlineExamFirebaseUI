import { Injectable } from '@angular/core';
import { 
  addDoc, collection,
  deleteDoc,
  doc, getDoc, getDocs,
  getFirestore, onSnapshot,
   orderBy, query, updateDoc, where 
} from "firebase/firestore"; 
import { of } from 'rxjs';
import { ForwardedReplie } from '../models/forwardedReplieModels/forwardedReplie';

@Injectable({
  providedIn: 'root'
})
export class ForwardedReplieService {

  
  private readonly collectionPath:string = "forwardedReplies";
  private forwardedRepliesCollection = collection(getFirestore(),this.collectionPath);
  private readonly forwardedReplieIdField = "id";

  constructor() { }

  

  async getAll(){
    const getForwardedReplies = await getDocs(this.forwardedRepliesCollection);
    return of(getForwardedReplies);
  }

  
  async add(forwardedReplie:ForwardedReplie){
    const addOperation = await addDoc(this.forwardedRepliesCollection, {
      id:forwardedReplie.id,
      questionId: forwardedReplie.questionId,
      userId:forwardedReplie.userId,
      email:forwardedReplie.email,
      answer:forwardedReplie.answer,
    });
    return of(addOperation);
  }

  // async delete(forwardedReplie:ForwardedReplie){
  //   const deleteOperation = await deleteDoc(doc(getFirestore(),this.collectionPath,""))
  // }

  // async update(forwardedReplie:ForwardedReplie){
  //   const questionDocRef = doc(getFirestore(), this.collectionPath, forwardedReplie.id == null ? forwardedReplie.title : forwardedReplie.id);
  //   const updateOperation = await updateDoc(questionDocRef,{
  //     questionId: forwardedReplie.questionId,
  //     questionTitle: forwardedReplie.questionTitle,
  //     userId:forwardedReplie.userId,
  //     email:forwardedReplie.email,
  //     answerId:forwardedReplie.answerId,
  //     answerValue:forwardedReplie.answerValue
  //   });
  //   return of(updateOperation);
  // }


}
