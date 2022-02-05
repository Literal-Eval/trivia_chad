class Question {
    constructor() {
        let correctPos = Math.ceil(Math.random() * 4) - 1;

        this.correctOptionNo = correctPos;
        this.options = [...this.incorrectOptions];

        this.options.splice(correctPos, 0, this.correctOption);
    }

    title: string = "";
    category: string = "";
    type: string = "";
    correctOption: string = "";
    incorrectOptions: string = "";

    options: string[] = [];
    correctOptionNo: number = 0;
}

var Questions: Question[] = [];

export default Questions;
export { Question };
