import React from 'react'

const App = () => {

  const relatives = ['Johns','Rock','Alan']
  return (
    <div id="main">
        <ol key="relativeList">
          {relatives.map((relative, index) => (
          // Each relative has a key with the naming convention "relativeListItem1", "relativeListItem2", etc.
          <li key={`relativeListItem${index + 1}`}>
            {relative}
          </li>
        ))}
        </ol>
    </div>
  )
}

export default App
