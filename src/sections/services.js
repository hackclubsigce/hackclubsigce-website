import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/icons/service-1-1.svg';
import icon2 from 'assets/icons/community.png';
import icon3 from 'assets/icons/service-1-3.svg';
import icon4 from 'assets/icons/service-1-4.svg';

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Pursue New Experiences',
    text:
      'A community of budding Developers, Innovators and Entrepreneurs',
  },
  {
    icon: icon2,
    title: 'Code Collaboration Community',
    text:
      'These are the 3 words which describe our club the best.',
  },
  {
    icon: icon3,
    title: 'Develop New Skills',
    text:
      'Our purpose is to make our students believe in themselves by learning new technical as well as non technical skills.',
  },
  {
    icon: icon4,
    title: 'Achievements',
    text:
      "Successfully organized 20+ workshops, webinars, competitions and built a community of total 200+ tech enthusiasts.",
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Quality features"
          title="Meet exciting feature of app"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          <Box
            className="service-card"
            sx={styles.serviceCard}
            key={`service-post-0`}
          >
            <Box className="service-icon" sx={styles.icon}>
              <Image src={SERVICES_DATA[0].icon} alt="" />
            </Box>
            <Heading as="h3">{SERVICES_DATA[0].title}</Heading>
            <Text as="p">{SERVICES_DATA[0].text}</Text>
          </Box>

          <Box
            className="service-card"
            sx={styles.serviceCard}
            key={`service-post-1`}
          >
            <Box className="service-icon" sx={styles.icon1}>
              <Image src={SERVICES_DATA[1].icon} alt="" sx={styles.img} />
            </Box>
            <Heading as="h3">{SERVICES_DATA[1].title}</Heading>
            <Text as="p">{SERVICES_DATA[1].text}</Text>
          </Box>

          <Box
            className="service-card"
            sx={styles.serviceCard}
            key={`service-post-2`}
          >
            <Box className="service-icon" sx={styles.icon}>
              <Image src={SERVICES_DATA[2].icon} alt="" />
            </Box>
            <Heading as="h3">{SERVICES_DATA[2].title}</Heading>
            <Text as="p">{SERVICES_DATA[2].text}</Text>
          </Box>

          <Box
            className="service-card"
            sx={styles.serviceCard}
            key={`service-post-3`}
          >
            <Box className="service-icon" sx={styles.icon}>
              <Image src={SERVICES_DATA[3].icon} alt="" />
            </Box>
            <Heading as="h3">{SERVICES_DATA[3].title}</Heading>
            <Text as="p">{SERVICES_DATA[3].text}</Text>
          </Box>

        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  img: {
    width: ['50px'],
    height: ['50px'],
    filter: 'invert(1)',
  },
  icon1: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['50px', '110px'],
    height: ['50px', '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
      lineHeight: ['25px']
    },
  },
};
