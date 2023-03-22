import './style.css'
import { useEffect, useState } from 'react';

type userType = {
    body: string,
    title: string,
    id: number,
    email: string,
    name: string,
}

type idType = {
    id: number
}


export function ModalBlog({ id }: idType) {
    const [blogs, setblogs] = useState<userType[]>([]);
    const [coments, setComents] = useState<userType>();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
          .then((response) => response.json())
          .then((data) => {setComents(data); setDataLoaded(true)})
      }, []);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
                .then(response => response.json())
                .then(data => setblogs(data))
        }, [])


        return (
            <>
            {dataLoaded &&
            
            <div className='container-coment'>
                <h1>Post <br/> {coments?.title.toLocaleUpperCase()}</h1>
                {blogs.map((blog, key) => {
                    key += 1;
                    return (
                        <div className='coment'  key={key}>
                            <h1>Comentário {key}</h1>
                            <p>Name: {blog.name}</p>
                            <p>Email: {blog.email}</p>
                            <p>{blog.title}</p>
                            <p>{blog.body}</p>
                        </div>
                    )
                })}
            </div>
            }
            </>
        )
}
