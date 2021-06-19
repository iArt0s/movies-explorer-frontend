import './MoviesCard.css';
import movieImg from '../../images/movie-1.jpg';
import movieImg2 from '../../images/movie-2.jpg';
import movieImg3 from '../../images/movie-3.jpg';
import movieImg4 from '../../images/movie-4.jpg';
import movieImg5 from '../../images/movie-5.jpg';
import movieImg6 from '../../images/movie-6.jpg';
import movieImg7 from '../../images/movie-7.jpg';
import movieImg8 from '../../images/movie-8.jpg';

import { useLocation } from 'react-router-dom';

function MoviesCard() {
  let location = useLocation();

  return (
    <>
      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn card__save-btn_saved link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg2} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn card__save-btn_saved link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg3} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn card__save-btn_saved link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg4} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg5} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn card__save-btn_saved link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg6} alt='Превью фильма' />
          </a>


        </div>
      </li>

      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg7} alt='Превью фильма' />
          </a>


        </div>
      </li>
      <li className='card'>
        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>33 слова о дизайне</h3>
            <p className='card__duration'>1ч 47м</p>
          </div>

          <button
              className={`card__save-btn card__save-btn_saved link ${
                  location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
          ></button>
        </div>
        <div className='card__root-container'>
          <a
              className='card__img-link link'
              href='https://youtu.be/ywjQ3bZElpI'
              target='_blank'
              rel='noreferrer'
          >
            <img className='card__img' src={movieImg8} alt='Превью фильма' />
          </a>


        </div>
      </li>
    </>
  );
}

export default MoviesCard;
