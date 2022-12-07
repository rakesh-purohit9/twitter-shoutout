import React from "react";

import { Column, Row, Img, Text, Grid } from "components";
import TweetCard from "../../components/common/TweetCard";
import { DhiWiseTweets } from "../../constants/tweets";

const GiveawayPage = () => {
  return (
    <>
      <Column className="bg-black_900 flex flex-col font-sans items-center justify-start mx-[auto] sm:p-[15px] md:p-[24px] p-[36px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[1241px] sm:mb-[14px] md:mb-[19px] mb-[28px] mx-[auto] sm:px-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="flex-shrink-0 max-w-[100%] w-[14%]"
              alt="Group"
            />
            <Text
              className="bg-black_900 flex-grow font-medium md:p-[13px] sm:p-[15px] px-[20px] py-[19px] rounded-radius6 text-white_A700"
              as="h1"
              variant="h1"
            >
              Click to Tweet for DhiWise
            </Text>
          </Row>
          <Column className="flex flex-col items-center justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
            <Grid className="sm:gap-[14px] md:gap-[19px] gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
              {DhiWiseTweets?.length > 0 ? DhiWiseTweets.map(tweetRecord => (<TweetCard key={tweetRecord?.id} tweetData={tweetRecord} />)) : "DhiWise is preparing for upcoming events"}
            </Grid>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[120px] sm:mt-[63px] md:mt-[82px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-white_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              Generated with ❤️ from DhiWise
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              {/* <Img
                src="images/img_image1.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="facebook"
              /> */}
              <Img
                src="images/img_image2.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px] cursor-pointer"
                alt="Twitter"
                onClick={() => window.open('https://twitter.com/DhiWise')}
              />
              <Img
                src="images/img_image3.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px] cursor-pointer"
                alt="LinkedIn"
                onClick={() => window.open('https://linkedin.com/company/DhiWise')}
              />
              <Img
                src="images/img_image6.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px] cursor-pointer"
                alt="GitHub"
                onClick={() => window.open('https://github.com/DhiWise')}
              />
              <Img
                src="images/img_image5.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px] cursor-pointer"
                alt="YouTube"
                onClick={() => window.open('https://youtube.com/@DhiWise')}
              />
              <Img
                src="images/img_image4.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px] cursor-pointer"
                alt="Instagram"
                onClick={() => window.open('https://instagram.com/DhiWise')}
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default GiveawayPage;
