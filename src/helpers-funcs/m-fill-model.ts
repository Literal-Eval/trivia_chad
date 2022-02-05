import { createContext } from "react";
import { Question } from "../models/questions";
import mFetch from "./m-fetch";

interface QuestionInterface {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string,
}

interface FetchResult {
    results: QuestionInterface[],
    response_code: number,
}

async function fillModel(questions: Question[]) {
    let data = (await mFetch() as FetchResult)['results'];
    console.log(data);
}

export default fillModel;
