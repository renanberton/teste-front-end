import { useEffect, useState } from 'react';
import './style.css';

type userType = {
    body: string,
    title: string,
    branch: string,
    commit: string,
    branches_url: string,
    owner: string,
    description: string,
    branches: any,
}

type branchType = {
    userId: string,
}

export function User() {
    const [repositories, setRepositories] = useState<userType[]>([]);

    function LoadRepos() {
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setRepositories(data))
        }, [])

        return (
            <div className='container'>
                <ul className='container-post'>
                    {repositories.map(repo => {
                        return (
                                <li className='post'>
                                    <h3>{repo.title}</h3>
                                    <p>{repo.body}</p>
                                </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return (
        LoadRepos()
    )
}