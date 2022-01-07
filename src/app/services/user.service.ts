import { Injectable } from '@angular/core';
import { 
  addDoc, collection,
  deleteDoc,
  doc, getDoc, getDocs,
  getFirestore, onSnapshot,
   orderBy, query, updateDoc, where 
} from "firebase/firestore"; 
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly collectionPath:string = "posts";
  private userCollection = collection(getFirestore(),this.collectionPath);
  private readonly userEmailField = "email";

  constructor() { }

  

}
