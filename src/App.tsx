import React, { ChangeEvent, useEffect, useState } from 'react'
import { Analyzer } from './Analyzer'
import './App.css'
import { SimpleCloud } from './SimpleCloud'
import { WordFrequency } from './types/WordFrequency'

const analyzer = new Analyzer()

function App() {

  const [text, setText] = useState("The sun shines over the lake.")
  const [wordFrequencies, setWordFrequencies] = useState<WordFrequency[]>([])
  const [limit, setLimit] = useState(3)

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleNChange = (event: ChangeEvent<HTMLInputElement>) => {
    const n = parseInt(event.target.value)
    setLimit(n < 0 ? 0 : n)
  }

  // Process changes.
  useEffect(() => {
    setWordFrequencies(analyzer.calculateMostFrequentNWords(text, limit))
  }, [text, limit])

  return (
    <div className="App">{limit}
      <header className="App-header">
        <div className="Form-part">Maximum number of results (n):&nbsp;
        <input type="number" value={limit} onChange={handleNChange}></input></div>
        <br />
        <textarea rows={30} onChange={handleTextChange}>{text}</textarea>
        <SimpleCloud wordFrequencies={wordFrequencies} />
        <br />
      </header>
    </div>
  )
}

export default App
