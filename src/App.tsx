import axios from "axios"
import { useState } from "react"
import './app.css'

export default function App() {
  const [quote, setQuote] = useState<string | null>(null)
  const [author, setAuthor] = useState<string | null>(null)

  const fetchQuote = async () => {
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {headers: {'x-api-key': import.meta.env.VITE_NINJA_API}} )
    const { quote, author } = response.data[0]
    setQuote(quote)
    setAuthor(author)
  }

  return (
    <div >
      <h1>Quotes Generator</h1>
      <div className="container">
          { quote && author &&
              <div className="quote">
                <p>{quote}</p>
                <p>by {author}</p>
              </div>
            }
        <button onClick={fetchQuote}>Generate Quote</button>
      </div>
    </div>
  )
} 