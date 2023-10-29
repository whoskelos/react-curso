import { useWordImage } from "../hooks/useWordCat";

export function Otro () {
    const { word } = useWordImage({ fact: 'Random fact'})

    return (
    <>
        {word && <img src={`https://cataas.com/cat/says/${word}`} />}
    </>
    )
}