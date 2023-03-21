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
            <div className='container-coment'>
                {blogs.map((blog, key) => {
                    key += 1;
                    return (
                        <div className='coment'  key={key}>
                            <h1>Comentário {key}</h1>
                            <p>{blog.title}</p>
                            <p>{blog.body}</p>
                        </div>
                    )
                })}
            </div>
        )
}
