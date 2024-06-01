import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/joke');
      const data = await response.json();
      setJokes(data.data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}

      {/* 
     
        
       <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="/pages/HomePage/img/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            onClick={() => setLike(like + 1)}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {like}
          </span>
          <button
            onClick={() => setDown(down + 1)}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {down}
          </span>
        </div> 
      </div>*/}
    </div>
  );
};
