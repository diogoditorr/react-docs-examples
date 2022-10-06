import { useState } from "react";
import * as React from "react";

export default function Form() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState<null | unknown>(null);
    const [status, setStatus] = useState("typing");

    if (status === "success") {
        return <h1>That&apos;s right!</h1>;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }

    function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is the a billboard that turns air into drinkable
                water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="answer"
                    id="answer"
                    cols={30}
                    rows={10}
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === "submitting"}
                ></textarea>
                <br />
                <button
                    disabled={answer.length === 0 || status === "submitting"}
                >
                    Submit
                </button>
                {error !== null && <p className="Error">{error.message}</p>}
            </form>
        </>
    );
}

function submitForm(answer: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldError = answer.toLowerCase() !== "lima";
            if (shouldError) {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            } else {
                resolve(null);
            }
        }, 1500);
    });
}
