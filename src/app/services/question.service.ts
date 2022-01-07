import { Injectable } from '@angular/core';
import { 
  addDoc, collection,
  deleteDoc,
  doc, getDoc, getDocs,
  getFirestore, onSnapshot,
   orderBy, query, updateDoc, where 
} from "firebase/firestore"; 
import { of } from 'rxjs';
import { Question } from '../models/questionModels/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly collectionPath:string = "questions";
  private questionCollection = collection(getFirestore(),this.collectionPath);
  private readonly questionTitleField = "title";

  constructor() { }

  
  async getByQuestionTitle(questionTitle:string){
    const getQuery = query(this.questionCollection,where(this.questionTitleField,"==",questionTitle));
    const querySnapshot =  (await getDocs(getQuery));      
    return of(querySnapshot);
  }

  async getAll(){
    const getQuestions = await getDocs(this.questionCollection);
    return of(getQuestions);
  }

  
  async add(question:Question){
    const addOperation = await addDoc(this.questionCollection, {
      id:question.id,
      title: question.title,
      description: question.description,
      time:question.time,
      options:question.options
    });
    return of(addOperation);
  }

  // async delete(question:Question){
  //   const deleteOperation = await deleteDoc(doc(getFirestore(),this.collectionPath,""))
  // }

  async update(question:Question){
    const questionDocRef = doc(getFirestore(), this.collectionPath, question.id == null ? question.title : question.id);
    const updateOperation = await updateDoc(questionDocRef,{
      title: question.title,
      description: question.description,
      time:question.time,
      options:question.options
    });
    return of(updateOperation);
  }

}
