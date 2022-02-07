import { Question, QuestionInterface } from "../models/questions";
import mFetch from "./m-fetch";

interface FetchResult {
    results: QuestionInterface[],
    response_code: number,
}

async function fillModel(questions: Question[]) {
    let data = (await mFetch() as FetchResult)['results'];
 
    data.forEach((element: QuestionInterface) => {
        questions.push(new Question(element));
    });

    console.log(questions);
}

export default fillModel;
