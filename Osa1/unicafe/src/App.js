import React, { useState } from 'react'

const Button = ({name, handleClick}) => {
  return (
  <>
    <button onClick={handleClick}>{name}</button>
  </>
  )
}

const StatiscticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad, all, average}) => {
  if (good !== 0 || bad !== 0 || neutral !== 0) {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatiscticLine text="good" value={good}/>
            <StatiscticLine text="neutral" value={neutral}/>
            <StatiscticLine text="bad" value={bad}/>
            <StatiscticLine text="all" value={all}/>
            <StatiscticLine text="average" value={average}/>
            <StatiscticLine text="positive" value={(good / all) * 100 + " %"}/>
          </tbody>
        </table>
        
      </>
    )
  } else {
      return (
        <>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </>
      )
    }
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all

  return (
    <div>
      <h2>Give feedback</h2>
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics
      good={good}
      bad={bad}
      neutral={neutral}
      all={all}
      average={average}
      />

    </div>
  )
}

export default App
