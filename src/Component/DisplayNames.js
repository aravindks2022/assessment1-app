import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import axios from 'axios';

const DisplayNames = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data);
                setLoading(false); 
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h2 className="mb-4">Display Names via API call</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row">
                        {users.map(user => (
                            <div key={user.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-text">Email: {user.email}</p>
                                        <p className="card-text">Phone: {user.phone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default DisplayNames;
