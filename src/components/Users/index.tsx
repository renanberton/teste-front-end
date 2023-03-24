import { useEffect, useState } from 'react';
import { ModalUsers } from '../Modal';
import { Header } from '../Header';
import './style.css';

type userType = {
  name: string,
  username: string,
  id: number,
  email: string,
};

export function Users() {
  const [users, setUsers] = useState<userType[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openBlog, setopenBlog] = useState<boolean>(true);
  const [idPost, setIdPost] = useState<number>(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setDataLoaded(true);
      });
  }, []);

  return (
    <>
    <Header />
      {openModal && <img className='close-icon' src="/imgs/close-icon.png" alt='Imagem para fechar os comentários' width={"50px"} onClick={() => {setOpenModal(false); setopenBlog(true)}} />}
      {dataLoaded && openModal && idPost && <ModalUsers id={idPost} />}
      {openBlog && 
      <div className='container'>
        <h1>Blog - API</h1>
        <ul className='container-post'>
          {users.map((blog) => {
            return (
              <li className='post-users' onClick={() => {setIdPost(blog.id); setOpenModal(true); setopenBlog(false) }}>
                <h2>{blog.name}</h2>
                <p>{blog.username} <br /> {blog.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
      }
    </>
  );
}