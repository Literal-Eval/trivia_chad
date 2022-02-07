interface QuestionInterface {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string,
}

class Question {
    constructor(question: QuestionInterface) {
        this.type = question['type'];
        
        this.category = question['category'];
        this.difficulty = question['difficulty'];
        this.title = question['question'];
        this.correctOption = question['correct_answer'];
        this.incorrectOptions = question['incorrect_answers'];

        let correctPos = Math.ceil(Math.random() * 4) - 1;

        this.correctOptionNo = correctPos;
        this.options = [...this.incorrectOptions];

        this.options.splice(correctPos, 0, this.correctOption);
    }

    title: string = "";
    category: string = "";
    type: string = "";
    difficulty: string = '';
    correctOption: string = "";
    incorrectOptions: string = "";

    options: string[] = [];
    correctOptionNo: number = 0;
}

var Questions: Question[] = [];

export default Questions;
export { Question };
export type { QuestionInterface };
