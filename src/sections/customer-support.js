import React, { useState } from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'components/link';
import Image from 'components/image';

import img1 from 'assets/cta-2-1.png';

const CustomerSupport = () => {
  const [loading, setLoading] = useState(false)
  return (
    <Box id='contact' as="section" sx={styles.customerSupport}>
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                Let us know about what you like to expect!
              </Heading>
              <Text as="p" sx={styles.specialText}>
                Connect with us for collaborations, inquires, suggestions and ideas are most welcome.
              </Text>
              <Box >
                <form style={styles.form} >
                  <input style={styles.input} placeholder='Subject' />
                  <textarea style={styles.textarea} placeholder='Message' ></textarea>
                  <button disabled={loading} style={styles.buttonStyle}>{loading ? <div>
                    <div class="nb-spinner"></div>
                  </div> : 'Send'}</button>
                </form>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  customerSupport: {
    overflow: 'hidden',
    pt: ['75px', null, null, null, '0'],
    pb: ['75px', null, null, null, null, '120px'],
  },
  row: {
    display: 'grid',
    gridGap: [0, null, null, null, '25px', null, '55px'],
    gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
  },
  col: {
    img: {
      maxWidth: ['100%', null, null, '60%', '100%', 'none'],
      mx: [null, null, null, 'auto', '0'],
      display: [null, null, null, 'block'],
      mt: [null, null, null, null, '40px', '0'],
    },
  },
  content: {
    pt: [0, null, null, null, '160px', '120px'],
    mb: [null, null, null, '-40px', '0'],
    position: 'relative',
    zIndex: 10,
    paddingLeft: ['12px', null, null, null, '0'],
    paddingRight: ['12px', null, null, null, '0', '75px', '0'],
    pb: ['10px'],
    maxWidth: [null, null, null, '590px', null, '100%'],
    width: ['100%'],
    mx: [null, null, null, 'auto', null, '0'],
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      fontSize: [5, null, '21px', null, 7, '32px', 8],
      maxWidth: [null, null, null, '400px', 'none'],
      mx: [null, null, null, 'auto', '0'],
      color: 'black',
      fontWeight: 'bold',
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
      lineHeight: [1.5, null, 1.25],
      mb: ['30px', null, null, null, '10px'],
    },
    p: {
      fontSize: [0, null, 2, null, '17px'],
      color: 'text',
      lineHeight: ['26px', null, null, 1.8, null, 2.06],
      '+p': {
        mt: ['15px', null, null, null, '15px'],
      },
    },
  },
  specialText: {
    color: 'heading',
    opacity: 0.6,
    mb: '30px'
  },
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    mt: ['10px', null, null, null, '10px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '1rem 1rem',
    width: '100%',
    border: '2px solid rgba(0,0,0,0.05)',
    borderRadius: '0.5rem',
    backgroundColor: '#F8FAFC',
    margin: '10px 0',
    outline: 'none',
    fontFamily: 'Nunito'
  },
  textarea: {
    padding: '1rem 1rem',
    width: '100%',
    height: '250px',
    border: '2px solid rgba(0,0,0,0.05)',
    borderRadius: '0.5rem',
    backgroundColor: '#F8FAFC',
    margin: '10px 0',
    resize: 'none',
    outline: 'none',
    fontFamily: 'Nunito'
  },
  buttonStyle: {
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#8d448b',
    outline: 'none',
    color: 'white',
    fontWeight: 'bold',
    border: '0px'
  }
};
