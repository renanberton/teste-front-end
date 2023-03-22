import { useEffect, useState } from 'react';
import { ModalBlog } from '../Modal';
import './style.css';

type userType = {
  body: string;
  title: string;
  id: number;
};

export function Blog() {
  const [blogs, setblogs] = useState<userType[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openBlog, setopenBlog] = useState<boolean>(true);
  const [idPost, setIdPost] = useState<number>(1);

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
      {openModal && <img className='close-icon' src="/imgs/close-icon.png" alt='Imagem para fechar os comentários' width={"50px"} onClick={() => {setOpenModal(false); setopenBlog(true)}} />}
      {dataLoaded && openModal && idPost && <ModalBlog id={idPost} />}
      {openBlog && 
      <div className='container'>
        <ul className='container-post'>
          {blogs.map((blog) => {
            return (
              <li className='post' onClick={() => {setIdPost(blog.id); setOpenModal(true); setopenBlog(false) }}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
      }
    </>
  );
}



