import React from "react";

import { Column, Row, Img, Text, Grid, Stack } from "components";

const GiveawayPage = () => {
  return (
    <>
      <Column className="bg-black_900 flex flex-col font-gilroy items-center justify-start mx-[auto] sm:p-[15px] md:p-[24px] p-[36px] w-[100%]">
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
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
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
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo One"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="twitter One"
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
                      alt="share One"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo Two"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="twitter Two"
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
                      alt="share Two"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo Three"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="twitter Three"
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
                      alt="share Three"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo Four"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="twitter Four"
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
                      alt="share Four"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="border border-gray_900 border-solid flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius12 w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_dhiwiselogo.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="Dhiwiselogo Five"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-white_A700"
                      as="h1"
                      variant="h1"
                    >
                      DhiWise
                    </Text>
                  </Row>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-gray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DhiWise
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    #AppleMagicMouseGiveAwayContest
                  </Text>
                  <Text
                    className="font-light leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Quote this tweet with your picture with our #Flutter props
                    ar DhiWise booth at @flutterconfin today and stand a chance
                    to win an Apple Magic Mouse! Head to this link for the T&C.
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="twitter Five"
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
                      alt="share Five"
                    />
                  </Stack>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[120px] sm:mt-[63px] md:mt-[82px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal mb-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-white_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              Powered by DhiWIse
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              <Img
                src="images/img_image1.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageOne"
              />
              <Img
                src="images/img_image2.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageTwo"
              />
              <Img
                src="images/img_image3.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageThree"
              />
              <Img
                src="images/img_image6.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageSix"
              />
              <Img
                src="images/img_image5.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageFive"
              />
              <Img
                src="images/img_image4.png"
                className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="imageFour"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default GiveawayPage;
