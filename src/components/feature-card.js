import React from 'react';
import { Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { CalendarIcon, HashtagIcon } from '@heroicons/react/outline'
import CommentIcon from 'assets/comment-1.svg';

const FeatureCard = (props) => {
  let path = props.title.split(" ");
  let finalPath = `https://hcs-blogs.vercel.app/blogs/${path.join("-")}`
  finalPath = finalPath.toString();
  return (
    <a target={'_blank'} href={finalPath}>
      <Box sx={styles.fevCard}>
        <Box className="image" sx={styles.image}>
          <Image style={{ height: '200px', aspectRatio: '16/9' }} src={props.image} alt="" />
        </Box>
        <Box sx={styles.content}>
          <Heading as="h3">
            <p style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' }} dangerouslySetInnerHTML={{ __html: `${props.title.substring(0, 37)}...` }}></p>
          </Heading>
          <span style={{ position: 'relative', top: '-10px', padding: "2px 10px", borderRadius: '10px', backgroundColor: '#444', color: '#fff', fontWeight: 'bold' }}>
            {props.tag[0]}
          </span>
          <Text as="p">
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CalendarIcon style={{ height: '1rem', width: '1rem', marginRight: '10px' }} />
              {props.date}
            </span>
          </Text>
        </Box>
      </Box>
    </a>
  );
};

export default FeatureCard;

const styles = {
  fevCard: {
    transition: '500ms',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
  },
  image: {
    overflow: 'hidden',
    borderTopLeftRadius: ['5px'],
    borderTopRightRadius: ['5px'],
    img: {
      display: 'block',
      width: '100%',
    },
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: [20, null, null, '30px'],
    paddingRight: [20, null, null, '30px'],
    paddingTop: ['15px', null, null, '25px'],
    borderBottomLeftRadius: ['5px'],
    borderBottomRightRadius: ['5px'],
    pb: ['10px', null, null, null, '30px'],
    border: '1px solid #F3F4F5',
    borderTop: '0',
    h3: {
      fontWeight: 'bold',
      fontSize: ['18px', null, '17px', null, 3],
      lineHeight: [1.55],
      a: {
        transition: '500ms',
        '&:hover': {
          color: 'primary',
        },
      },
    },
    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: [1, null, 2],
      lineHeight: [2],
      color: 'text',
      opacity: 0.8,
      mt: ['4px'],
      img: {
        width: ['16px', null, 'auto'],
        mr: ['8px'],
      },
    },
  },
};
