import './style.css'
import { useEffect, useState } from 'react';

type userType = {
    body: string,
    title: string,
    id: string,
}

export function ModalBlog() {
    const [blogs, setblogs] = useState<userType[]>([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
                .then(response => response.json())
                .then(data => setblogs(data))
        }, [])

        return (
            <div>
                {blogs.map(blog => {
                    return (
                        <div className='post'>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    )
                })}
            </div>
        )
}
