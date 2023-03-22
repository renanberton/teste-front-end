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
    const [coments, setComents] = useState<userType[]>([]);
    const [post, setPost] = useState<userType>();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
          .then((response) => response.json())
          .then((data) => {setPost(data); setDataLoaded(true)})
      }, []);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
                .then(response => response.json())
                .then(data => setComents(data))
        }, [])


        return (
            <>
            {dataLoaded &&
            
            <div className='container-coment'>
                <h1>Post <br/> {post?.title.toLocaleUpperCase()}</h1>
                {coments.map((coment, key) => {
                    key += 1;
                    return (
                        <div className='coment'  key={key}>
                            <h1>Comentário {key}</h1>
                            <p>{coment.body}</p>
                            <p><strong>Name: </strong>{coment.name}</p>
                            <p><strong>Email: </strong>{coment.email}</p>
                        </div>
                    )
                })}
            </div>
            }
            </>
        )
}
