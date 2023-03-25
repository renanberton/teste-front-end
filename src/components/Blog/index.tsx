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
  const [posts, setPosts] = useState<userType[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openPost, setOpenPost] = useState<boolean>(true);
  const [idPost, setIdPost] = useState<number>(1);
  const [itemsToShow, setItemsToShow] = useState<number>(25);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setDataLoaded(true);
      });
  }, []);

  function ScrollToTopButton(){
    return (
      <button className='to-top-button' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' }); setItemsToShow(25)}}>
        Topo
      </button>
    );
  };

  return (
    <>
    <Header />
      {openModal && <img className='close-icon' src="/imgs/close-icon.png" alt='Imagem para fechar os comentários' width={"50px"} onClick={() => {setOpenModal(false); setOpenPost(true)}} />}
      {dataLoaded && openModal && idPost && <ModalBlog id={idPost} />}
      {openPost && 
      <div className='container'>
        <h1>Posts</h1>
        <ul className='container-post'>
          {posts.slice(0, itemsToShow).map((post, key) => {
            return (
              <li className='post' key={key} onClick={() => {setIdPost(post.id); setOpenModal(true); setOpenPost(false) }}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
        {itemsToShow === posts.length && <ScrollToTopButton />}
        {itemsToShow < posts.length && (
          <button className='load-more' onClick={() => setItemsToShow(itemsToShow + 25)}>Ver Mais</button>
        )}
      </div>
      }
    <Footer />
    </>
  );
}