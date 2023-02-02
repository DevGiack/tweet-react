import { useState } from 'react';
import Tweet from './Tweet';
function App() {

 const DEFAULT_TWEET = [
    {
      id: 1,
      name: "Jack",
      content: "Je suis bien",
      like: 100,
    },
    {
      id: 2,
      name: "Lucas",
      content: "Je suis loin",
      like: 10,
    },
    {
      id: 3,
      name: "Jean",
      content: "Je suis rien",
      like: 15,
    },
    {
      id: 4,
      name: "Bob",
      content: "Je suis rouge",
      like: 14,
    },
  ];

 const [tweets, setTweets] = useState(DEFAULT_TWEET);

 const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const content = e.target.content.value;

  const newTweet = {
    id: tweets[tweets.length - 1]?.id + 1 ??  0,
    name,
    content,
    like: 0 ,
  };
  addTweet(newTweet);
 };

 const addTweet = (tweet) => {
setTweets([...tweets, tweet]);
 }

const onDelete = (tweetId) => {
  setTweets(curr => curr.filter(tweet => tweet.id !== tweetId))
};

const onLike = (tweetId) => {
  setTweets(curr => {
    const copyTweet = [...curr];

    const LikedTweet = copyTweet.find(tweet => tweet.id === tweetId)
    LikedTweet.like += 1;

    return copyTweet;
  })
};

  return (
    <div>
      <form className='tweet-form' onSubmit={handleSubmit}>
        <h4>New Tweet</h4>
        <input type="text" name='name' placeholder='name' />
        <input type="text" name='content' placeholder='content' />
        <input type="submit" />
      </form>
        <div className="tweet-container">
          {tweets.map((tweet) => {
           return (
          <Tweet 
          key={tweet.id}
           id={tweet.id}
           name={tweet.name} 
           content={tweet.content} 
           like={tweet.like}
           onDelete={(id) => {onDelete(id)}}
           onLike={(id) => {onLike(id)}}
         />
          );
        })}
        </div>
    </div>
    );
}

export default App
