import React from "react";
import { Column, Row, Img, Text } from "components";
import { event } from "../../../constants/eventdetails";

const TweetCard = (props) => {
  // Add fallback to avoid destructuring from undefined
  const {
    content = "No content available",
    about = "Anonymous",
    id,
  } = props?.tweetData || {};

  return (
    <Column className="outline outline-1 outline-offset-1 outline-white flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%] cursor-pointer hover:outline-[3px] hover:outline-dotted hover:outline-indigo-500/100">
      <Row className="flex flex-row items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[100%]">
        <Row className="flex flex-row items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[100%] common-row">
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
      </Row>
      <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
        <Text
          className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
          as="h2"
          variant="h2"
        >
          {content}
        </Text>
      </Column>
      {/* <Row
        onClick={() => {
          window.open(
            `twitter://post/message=${content}`
            // &hashtags=${ event.hashtags }${id === 12 ? ",30Days30Usecases" : ""}
          );
        }}
        className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[100%]"
      >
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
          Click to Tweet
        </Text>
      </Row> */}
      <Row
        onClick={() => {
          navigator.clipboard.writeText(
            `${content} #${event?.hashtags?.replaceAll(",", " #")}`
          );
          alert("Copied. Post now.");
          function shareOnLinkedIn() {
            const url = encodeURIComponent("https://dhiwise.com/");
            // const title = encodeURIComponent("Open Graph Protocol");
            // const summary = encodeURIComponent(
            //   "Learn about the Open Graph protocol for rich object representation."
            // );
            // const source = encodeURIComponent("ogp.me");
            const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
            window.open(shareUrl, "_blank");
          }
          shareOnLinkedIn();
        }}
        className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[22px] mt-[32px] sm:mt-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[100%]"
      >
        <Img
          src="images/img_image3.png"
          className="flex-shrink-0 sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:w-[24px] md:w-[32px] w-[48px]"
          alt="linkedin"
        />
        <Text
          className="flex-grow font-light ml-[8px] text-bluegray_100"
          as="h3"
          variant="h3"
          style={{ fontSize: "2em" }}
        >
          Copy to post
          {/* Copy for LinkedIn */}
        </Text>
      </Row>
    </Column>
  );
};

export default TweetCard;
