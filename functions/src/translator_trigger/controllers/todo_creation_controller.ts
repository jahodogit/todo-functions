
import { DocumentData, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { FirestoreEvent } from "firebase-functions/v2/firestore";
import { log,} from "firebase-functions/logger";
import { Translator } from "../helpers/language_translator/traslator";
import { GoogleTodoTranslator } from "../helpers/language_translator/google_todo_translator";
import { Todo } from "../models/todo";


export class TodoCreationController{

    static readonly collectionName = '/todo/{documentId}';

   

    static async onTodoCreated(event : FirestoreEvent<QueryDocumentSnapshot | undefined>){

        const translator: Translator = new GoogleTodoTranslator();

        const snapshot: QueryDocumentSnapshot | undefined = event.data;

        if(!snapshot){
            log(' No data associated with the event ');
            return;    
        }

        const documentData: DocumentData  = snapshot.data();

        const newTodo: Todo = await translator.translateTodoItem(documentData as Todo, 'es', 'en');

        
        

        snapshot.ref.update(
            { translate: 
                {   
                    title: newTodo.title, 
                    description: newTodo. description 
                } 
            }
        );
    }
}

  

    