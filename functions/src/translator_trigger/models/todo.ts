export class Todo{
    title: string;
    description: string;
    isCompleted: boolean;
    date: string

    constructor(title: string, description: string, isCompleted: boolean, date: string){
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}