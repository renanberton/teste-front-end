import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { ModalBlog } from '../Modal';
import { Footer } from '../Footer';
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
  const [itemsToShow, setItemsToShow] = useState<number>(25);

  function ScrollToTopButton(){
    return (
      <button className='to-top-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Topo
      </button>
    );
  };

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
    <Header />
      {openModal && <img className='close-icon' src="/imgs/close-icon.png" alt='Imagem para fechar os comentários' width={"50px"} onClick={() => {setOpenModal(false); setopenBlog(true)}} />}
      {dataLoaded && openModal && idPost && <ModalBlog id={idPost} />}
      {openBlog && 
      <div className='container'>
        <h1>Posts</h1>
        <ul className='container-post'>
          {blogs.slice(0, itemsToShow).map((blog, key) => {
            return (
              <li className='post' key={key} onClick={() => {setIdPost(blog.id); setOpenModal(true); setopenBlog(false) }}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
              </li>
            );
          })}
        </ul>
        {itemsToShow === blogs.length && <ScrollToTopButton />}
        {itemsToShow < blogs.length && (
          <button className='load-more' onClick={() => setItemsToShow(itemsToShow + 25)}>Ver Mais</button>
        )}
      </div>
      }
    <Footer />
    </>
  );
}