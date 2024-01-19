
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { TodoCreationController } from './translator_trigger/controllers/todo_creation_controller';


// The Firebase Admin SDK to access Firestore.
import {initializeApp} from "firebase-admin/app";


initializeApp();


exports.translateTodo = onDocumentCreated(TodoCreationController.collectionName,TodoCreationController.onTodoCreated);

