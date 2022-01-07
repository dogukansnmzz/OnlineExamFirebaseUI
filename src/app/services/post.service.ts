import { Injectable } from '@angular/core';
import { 
  addDoc, collection,
  deleteDoc,
  doc, getDoc, getDocs,
  getFirestore, onSnapshot,
   orderBy, query, updateDoc, where 
} from "firebase/firestore"; 
import { of } from 'rxjs';
import { Post } from '../models/postModels/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly collectionPath:string = "posts";
  private postCollection = collection(getFirestore(),this.collectionPath);
  private readonly postTitleField = "title";

  constructor() { }

  async getAllOrderByDescendingPostTitle(){
    const getQuery = query(this.postCollection,orderBy(this.postTitleField,"desc"));
    const querySnapshot = (await getDocs(getQuery));
    return of(querySnapshot)
  }

  async getAllOrderByAscendingPostTitle(){
    const getQuery = query(this.postCollection,orderBy(this.postTitleField,"asc"));
    const querySnapshot = (await getDocs(getQuery));
    return of(querySnapshot)
  }


  async getByPostTitle(postTitle:string){
    const getQuery = query(this.postCollection,where(this.postTitleField,"==",postTitle));
    const querySnapshot =  (await getDocs(getQuery));      
    return of(querySnapshot);
  }

  async getAll(){
    const getPosts = await getDocs(this.postCollection);
    return of(getPosts);
  }

  
  async add(post:Post){
    const addOperation = await addDoc(this.postCollection, {
      title: post.title,
      description: post.description,
    });
    return of(addOperation);
  }

  async delete(post:Post){
    const deleteOperation = await deleteDoc(doc(getFirestore(),"posts",""))
  }

  async update(post:Post){
    const postDocRef = doc(getFirestore(), this.collectionPath, post.id == null ? post.title : post.id);
    const updateOperation = await updateDoc(postDocRef,{
      title:post.title,
      description:post.description,
    
    });
    return of(updateOperation);
  }
}
