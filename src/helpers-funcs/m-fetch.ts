async function mFetch (): Promise <Object> {
    return await fetch('https://opentdb.com/api.php?amount=10&type=multiple').then((response: Response) => {
        return response.json();
    }).then((res => {
        return res;
    }));
}

export default mFetch;