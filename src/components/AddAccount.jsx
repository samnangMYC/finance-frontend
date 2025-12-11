import React, { useEffect } from 'react'

const AddAccount = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);         
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            AddAccount
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.id}</h2>

                    </div>
                ))
            }

        </div>
    )
}

export default AddAccount