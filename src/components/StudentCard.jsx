import React, { useState } from 'react'

export default function StudentCard({ student }) {
  const [fav, setFav] = useState(false)

  return (
    <div style={{border:'1px solid gray', padding:'10px', margin:'10px'}}>
      <h3>{student.name}</h3>
      <p>GPA: {student.gpa}</p>
      <p>Major: {student.major}</p>
      <button onClick={() => setFav(!fav)}>
        {fav ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  )
}
