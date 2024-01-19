import { Todo } from "../../models/todo";

export abstract class  Translator{
   abstract translateTodoItem(todo: Todo, from:String, to: String): Promise<Todo>;
}