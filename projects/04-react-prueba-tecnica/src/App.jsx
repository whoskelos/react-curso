import './App.css'
import { useWordImage } from "./hooks/useWordCat";
import { useCatFact } from "./hooks/useCatFact";



export function App() {
    const { fact, refreshFact } = useCatFact()
    const { word } = useWordImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {word && <img src={`https://cataas.com/cat/says/${word}`} alt={`Image extracted using the first word for ${fact}`} />}
            </section>
        </main>
    )
}