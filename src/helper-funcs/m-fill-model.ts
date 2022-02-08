import { Question, QuestionInterface } from "../models/questions";
import mFetch from "./m-fetch";

interface FetchResult {
    results: QuestionInterface[],
    response_code: number,
}

async function fillModel(questions: Question[]) {
    let data = (await mFetch() as FetchResult)['results'];
    questions.splice(0);
    
    data.forEach((element: QuestionInterface) => {
        questions.push(new Question(element));
    });
}

export default fillModel;
