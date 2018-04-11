import { observable, computed } from "mobx";
import fetchNote from '../API/note'
class LoginStore{
    @observable notebooks = []
    @action addNootbook(title){
        fetchNote.addNotebook(title).then(res=>{
            this.notebooks.push(res)
        })
    }







}