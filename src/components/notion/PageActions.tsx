import * as React from 'react';

// import styles from './styles.module.css';

// import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet'
// import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline'

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */
export const PageActions: React.FC<{ tweet: string }> = ({ tweet }) => {
  return (
    <div>
      <a
        href={`https://twitter.com/intent/like?tweet_id=${tweet}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Like this post on Twitter"
      >
        IC1
        {/* <IoHeartOutline /> */}
      </a>

      <a
        href={`https://twitter.com/intent/retweet?tweet_id=${tweet}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Retweet this post on Twitter"
      >
        IC2
        {/* <AiOutlineRetweet /> */}
      </a>
    </div>
  );
};
