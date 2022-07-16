import React, { useRef, useEffect, useState } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';

import FeatureCard from 'components/feature-card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import featureImage1 from 'assets/tutorial-1-1.png';
import featureImage2 from 'assets/tutorial-1-2.png';
import featureImage3 from 'assets/tutorial-1-3.png';
import axios from 'axios';

const FeatureData = [
  {
    image: featureImage1,
    title: 'How to work with prototype design with adobe xd featuring tools',
    comments: '22 Comments',
    path: '/',
  },
  {
    image: featureImage2,
    title: 'Create multiple artboard by using figma prototyping development',
    comments: '15 Comments',
    path: '/',
  },
  {
    image: featureImage3,
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    comments: '12 Comments',
    path: '/',
  },
];

const Feature = () => {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(`${window.location.origin}/api/fetchBlogs`)
      .then((res) => {
        setData(res.data.items.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.features} id="blogs">
      <Container>
        <BlockTitle
          slogan="Featured Blogs"
          title="Most searched Blogs & Articles"
          styles={styles.blockTitle}
        />
        <Swiper {...params} ref={ref}>
          {
            data && data.map((blog, index) => {
              console.log(blog)
              return <div className="swiper-slider" key={`feature-card-key${index}`}>
                <FeatureCard
                  image={blog.img}
                  title={blog.shortTitle}
                  date={blog.date}
                  tag={blog.tags}
                // path={feature.path}
                />
              </div>
            })
          }
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  blockTitle: {
    textAlign: 'center',
  },
  features: {
    pt: ['80px', null, null, null, null, null, '120px'],
    pb: ['80px', null, null, null, '100px'],
    backgroundColor: '#F8FAFC',
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'hidden',
    },
    height: 'max-content'
  },
  carouselBtns: {
    display: ['flex', null, null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [2, null, 4, null, 5],
      color: '#BBC7D7',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '15px',
      transition: '500ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};
