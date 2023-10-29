import { useEffect, useState } from "react"

export function useWordImage({ fact }) {
    const [word, setWord] = useState()

    // para recuperar el texto de la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        const word = fact.split(' ')[0]
        setWord(word)
        console.log(word);

    }, [fact])

    return { word }
}