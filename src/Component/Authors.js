import React from 'react';

const Authors = ({authors}) =>{
    return(
        
        <div className="container mt-4">
        <h2>Authors</h2>
        {authors.length === 0 ? (
            <p className="text-secondary"><em>No authors currently. Please add an author using the form above.</em></p>
        ) : (
            <ul className="list-group">
                {authors.map((author, index) => (
                    <li key={index} className="list-group-item">
                        {author}
                    </li>
                ))}
            </ul>
        )}
    </div>
    )

}

export default Authors;
