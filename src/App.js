import React, {useState, useEffect} from 'react';
import './App.css';

//https://api.github.com/users/iqbalyarkhan


function App(props) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        if (!props.login) return;
        setLoading(true);

       fetch(`https://api.github.com/users/${props.login}`)
           .then(r => r.json())
           .then(setData)
           .then(() => setLoading(false))
           .catch(setError);
    }, [props.login]);

    if (loading){
        return <h1>Loading...</h1>
    }

    if (error){
        return <pre>{JSON.stringify(error,null,2)}</pre>
    }

    if (!data){
        return null;
    }

    return (
        <>
            <div>
                <h3>UserName: {data.login}</h3>
                <h3>Id: {data.id}</h3>
                <h3>email: {data.email}</h3>
                <img alt={data.login} src={data.avatar_url}/>
            </div>
        </>
    )

}

export default App;
