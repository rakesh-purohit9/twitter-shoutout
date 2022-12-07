import React from 'react'

import { Column, Row, Img, Text, Stack } from "components";
import { EventHashTags } from '../../../constants/eventdetails';


const TweetCard = (props) => {

  const { content, about } = props?.tweetData;
  return (
    <Column
      className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%] cursor-pointer"
      onClick={() => {
        window.open(`http://twitter.com/intent/tweet?text=${content}&hashtags=${EventHashTags}`);
      }}>
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
          <Img
            src="images/img_dhiwiselogo.png"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="Dhiwiselogo"
          />
          <Text
            className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700 w-[100%]"
            as="h1"
            variant="h1"
          >
            {about}
          </Text>
        </Row>
        {/* <Text
          className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[100%]"
          as="h2"
          variant="h2"
        >
          {about}
        </Text> */}
      </Row>
      <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
        {/* <Text
          className="font-normal not-italic text-white_A700 w-[auto]"
          as="h2"
          variant="h2"
        >
          #AppleMagicMouseGiveAwayContest
        </Text> */}
        <Text
          className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
          as="h2"
          variant="h2"
        >
          {content}
        </Text>
      </Column>
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
        <Img
          src="images/img_twitter.svg"
          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
          alt="twitter"
        />
        <Text
          className="flex-grow font-light ml-[4px] text-bluegray_100"
          as="h3"
          variant="h3"
        >
          Twitter
        </Text>
      </Row>
      <Column className="bg-gradient  flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] rounded-radius8 w-[100%]">
        <Stack className="bg-black_900_66 h-[48px] p-[12px] sm:p-[6px] md:p-[8px] relative rounded-radius12 w-[35%]">
          <Img
            src="images/img_share.svg"
            className="absolute h-[24px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="share"
          />
        </Stack>
      </Column>
    </Column>
  )
}

export default TweetCard