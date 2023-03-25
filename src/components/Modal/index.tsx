import './style.css'
import { useEffect, useState } from 'react';

type userType = {
    body: string,
    title: string,
    id: number,
    email: string,
    name: string,
    username: string,
    phone: string,
    website: string,
}

type idType = {
    id: number
}


export function ModalPost({ id }: idType) {
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
            <div>
                <div className='container-coment'>
                <h1>Post <br/> {post?.title.toLocaleUpperCase()}</h1>
                    {coments.map((coment, key) => {
                        key += 1;
                        return (
                            <div className='coment'  key={key}>
                                <h2>Comment {key}</h2>
                                <p>{coment.body}</p>
                                <p><strong>Name: <br /></strong>{coment.name}</p>
                                <p><strong>Email: <br /></strong>{coment.email}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            }
            </>
        )
}

export function ModalUsers({ id }: idType) {
    const [coments, setComents] = useState<userType>();
    const [post, setPost] = useState<userType>();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(response => response.json())
                .then(data => {setComents(data); setDataLoaded(true)})
        }, [])

        return (
            <>
            {dataLoaded &&
            <div>
                <h1>Post <br/> {post?.title.toLocaleUpperCase()}</h1>
                <div className='container-coment'>
                    {
                    <div className='coment'>
                        <h1>{coments?.name} </h1>
                        <span><strong>Name: </strong>{coments?.username}</span>
                        <span><strong>Email: </strong>{coments?.email}</span>
                        <span><strong>Phone: </strong>{coments?.phone}</span>
                        <span><strong>Website: </strong>{coments?.website}</span>
                    </div>
                    }
                </div>
            </div>
            }
            </>
        )
}