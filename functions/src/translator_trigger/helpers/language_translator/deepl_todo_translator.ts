
import { log } from "firebase-functions/logger";
import { Translator } from "./traslator";
import  { v2 }  from "@google-cloud/translate"
import { Todo } from "../../models/todo";



export class DeeplTodoTranslator implements Translator{

   
   

    readonly  projectId: string = 'grupor5-89270';
    readonly translator:  v2.Translate;

    constructor(){
      this.translator = new v2.Translate({ projectId: this.projectId });
    }

     async translateTodoItem(todoItem: Todo, from: string, to: string): Promise<Todo> {

       const [title] = await this.translator.translate(todoItem.title, to);
       const [description] = await this.translator.translate(todoItem.description, to);

       const todo  = new Todo(
        title,
        description,
        todoItem.isCompleted,
        todoItem.date,
       );

       return todo
    }

}