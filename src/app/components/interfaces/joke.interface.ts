export interface JokeValue {
    id: number;
    joke: string;
    categories: Array<String>;
}

export interface Joke {
    type: string;
    value: JokeValue;
}
