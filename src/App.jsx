import React, { useState, useEffect } from 'react'
import StudentCard from './components/StudentCard'

export default function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStudents([
        { id: 1, name: "Anik", gpa: 3.8, major: "CSE" },
        { id: 2, name: "Rahim", gpa: 3.5, major: "EEE" },
        { id: 3, name: "Karim", gpa: 3.9, major: "BBA" }
      ])
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Student Dashboard</h1>
      {students.map(s => (
        <StudentCard key={s.id} student={s} />
      ))}
    </div>
  )
}
