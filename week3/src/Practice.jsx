import { useState, useEffect } from "react" 

function Practice () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState (true) 
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => res.json())
        .then(posts => {
            setData(posts)
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Posts</h2>
            {data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Practice 