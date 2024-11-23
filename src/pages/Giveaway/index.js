import React, { useState, useEffect } from "react";
import { Column, Row, Img, Text } from "components";
import TweetCard from "../../components/common/TweetCard";
import { DhiWiseTweets } from "../../constants/tweets";
import { event } from "../../constants/eventdetails";

const GiveawayPage = () => {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(null);
  const [seenTweets, setSeenTweets] = useState([]);

  // Function to get a random index from the tweets array
  const getRandomTweetIndex = () => {
    if (DhiWiseTweets.length === 0) return null; // If no tweets, return null
    return Math.floor(Math.random() * DhiWiseTweets.length); // Random index
  };

  useEffect(() => {
    // Set a random tweet index on initial render
    if (DhiWiseTweets.length > 0) {
      const initialTweetIndex = getRandomTweetIndex();
      setCurrentTweetIndex(initialTweetIndex);
      setSeenTweets([initialTweetIndex]); // Mark this index as seen
    }
  }, []);

  const handleRefreshTweet = () => {
    // Get unseen tweets
    const unseenTweets = DhiWiseTweets.filter((_, index) => !seenTweets.includes(index));
    if (unseenTweets.length === 0) {
      // If all tweets are seen, reset the seenTweets and pick a new random one
      const newRandomIndex = getRandomTweetIndex();
      setSeenTweets([newRandomIndex]);
      setCurrentTweetIndex(newRandomIndex);
    } else {
      // Otherwise, pick a random unseen tweet
      const randomUnseenIndex = Math.floor(Math.random() * unseenTweets.length);
      const nextTweetIndex = DhiWiseTweets.indexOf(unseenTweets[randomUnseenIndex]);
      setCurrentTweetIndex(nextTweetIndex);
      setSeenTweets((prevSeenTweets) => [...prevSeenTweets, nextTweetIndex]);
    }
  };

  const currentTweet = DhiWiseTweets[currentTweetIndex] || null;

  return (
    <Column className="bg-black_900 flex flex-col font-sans items-center justify-start min-h-screen mx-auto sm:p-4 md:p-6 p-9 w-full">
      <Column className="flex flex-col items-center justify-start max-w-1241px sm:mb-4 md:mb-5 mb-7 mx-auto sm:px-4 w-full">
        <Row className="flex flex-row sm:flex-col md:flex-wrap items-center justify-between sm:px-0 w-full">
          <Img
            src="images/img_group.svg"
            className="flex-shrink-0 max-w-full w-14% sm:w-50%"
            alt="Group"
          />
          <Text
            className="bg-black_900 flex-grow font-medium md:p-3 sm:p-4 px-5 py-5 rounded-radius6 text-white_A700"
            as="h1"
            variant="h1"
          >
            Shoutouts for DhiWise @ {event.name}
          </Text>
        </Row>
        <Column className="flex flex-col items-center justify-start sm:mt-8 md:mt-11 mt-16 w-full sm:mb-16">
          {currentTweet ? (
            <TweetCard key={currentTweet.id} tweetData={currentTweet} />
          ) : (
            <Text className="text-white_A700" as="p" variant="body1">
              DhiWise is preparing for upcoming events
            </Text>
          )}
          <button
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleRefreshTweet}
          >
            Refresh Tweet
          </button>
        </Column>
        <Row className="flex flex-row sm:justify-center md:flex-wrap items-end justify-between mt-30 sm:mt-16 md:mt-20 w-full fixed bottom-0 bg-black_900 p-2">
          <Text
            className="font-normal mb-1 sm:mt-1 md:mt-1 mt-1 not-italic text-white_A700"
            as="h3"
            variant="h3"
          >
            with ❤️ from DhiWise One
          </Text>
          <Row className="flex flex-row md:flex-wrap items-center justify-between sm:justify-center space-x-8 sm:mx-0 sm:px-0 sm:w-full w-22%">
            <Img
              src="images/img_image2.png"
              className="sm:h-8 md:h-4 h-6 max-w-full sm:w-8 md:w-4 w-6 cursor-pointer"
              alt="Twitter"
              onClick={() => window.open("https://twitter.com/DhiWise")}
            />
            <Img
              src="images/img_image3.png"
              className="sm:h-8 md:h-4 h-6 max-w-full sm:w-8 md:w-4 w-6 cursor-pointer"
              alt="LinkedIn"
              onClick={() => window.open("https://linkedin.com/company/DhiWise")}
            />
            <Img
              src="images/img_image6.png"
              className="sm:h-8 md:h-4 h-6 max-w-full sm:w-8 md:w-4 w-6 cursor-pointer"
              alt="GitHub"
              onClick={() => window.open("https://github.com/DhiWise")}
            />
            <Img
              src="images/img_image5.png"
              className="sm:h-8 md:h-4 h-6 max-w-full sm:w-8 md:w-4 w-6 cursor-pointer"
              alt="YouTube"
              onClick={() => window.open("https://youtube.com/@DhiWise")}
            />
            <Img
              src="images/img_image4.png"
              className="sm:h-8 md:h-4 h-6 max-w-full sm:w-8 md:w-4 w-6 cursor-pointer"
              alt="Instagram"
              onClick={() => window.open("https://instagram.com/DhiWise")}
            />
          </Row>
        </Row>
      </Column>
    </Column>
  );
};

export default GiveawayPage;
