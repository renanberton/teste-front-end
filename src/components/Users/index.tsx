import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { ModalUsers } from '../Modal';
import { Footer } from '../Footer';
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
        <h1>Users</h1>
        <ul className='container-post'>
          {users.map((blog, key) => {
            return (
              <li className='post-users' key={key} onClick={() => {setIdPost(blog.id); setOpenModal(true); setopenBlog(false) }}>
                <h2>{blog.name}</h2>
                <p>{blog.username} <br /> {blog.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
      }
    <Footer />  
    </>
  );
}