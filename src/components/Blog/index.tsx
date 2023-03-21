import { useEffect, useState } from 'react';
import { ModalBlog } from '../Modal';
import './style.css';

type userType = {
  body: string;
  title: string;
  id: string;
};

export function User() {
  const [blogs, setblogs] = useState<userType[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setblogs(data);
        setDataLoaded(true);
      });
  }, []);

  return (
    <>
      {openModal && <img className='close-icon' src="/imgs/close-icon.png" width={"50px"} onClick={() => setOpenModal(false)} />}
      {dataLoaded && openModal && <ModalBlog/>}
      <div className='container'>
        <ul className='container-post'>
          {blogs.map((repo) => {
            return (
              <li className='post' onClick={() => setOpenModal(true)}>
                <h3>{repo.title}</h3>
                <p>{repo.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}



