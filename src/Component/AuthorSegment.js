import React, {useState} from 'react';
import Header from './HeaderComponent';
import AuthorForm from './AuthorForm';
import AuthorDisplay from './Authors';

const AuthorSegment=()=>{
    const [authors, setAuthors] = useState([]);

    const addAuthor=(newAuthor)=>{
        setAuthors([...authors, newAuthor]);
        console.log(authors);
    }

    return(
    <>
    <Header/>
    <div className="mt-4 container">
        <AuthorForm addAuthor={addAuthor}/>
        <AuthorDisplay authors={authors}/>
    </div>
    
    </>
    )
}

export default AuthorSegment;