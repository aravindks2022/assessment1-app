import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorForm = ({addAuthor}) =>{
    const [author, setAuthor] = useState('');

    const submitAuthor = (event)=>{
        event.preventDefault();
        addAuthor(author);
        setAuthor("");
    }
    return(
        <div className="container mt-4 border p-4">
            <h2>Add a new author</h2>
            <Form onSubmit={submitAuthor}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name" 
                        name="authorName"
                        value={author}
                        required
                        onChange={(e)=>setAuthor(e.target.value)} />
                    <Form.Text className="text-muted"><em><small>
                    *Required
                    </small></em></Form.Text>
                    
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AuthorForm;