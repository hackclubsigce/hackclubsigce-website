import { useAuthContext } from 'contexts/Auth';
import React, { useState } from 'react';
import { Box, Container, Button, Input, Heading, Text } from 'theme-ui';
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from 'contexts/firebase_config';
import axios from 'axios';


const RegisterEvent = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState("Register")
  const { user } = useAuthContext()

  // const register = () => {
  //   axios.post(`${window.location.origin}/api/sendmail`, { data, user })
  // }

  const registerEvent = async () => {
    setLoading(true)
    if (user && data) {
      const docRef = doc(db, "users", user.email, "EVENTS", data.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setLoading(false)
        setBtnText('Already Registered')
      } else {
        console.log("No such document!");
        let date = new Date()
        await setDoc(doc(db, "users", user.email, 'EVENTS', data.id), {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
          event: data.eventName
        })
          .then(async () => {
            const docRef = doc(db, "EVENTS", data.id);
            await updateDoc(docRef, {
              registrations: increment(1)
            })
              .then(() => {
                setLoading(false)
                setBtnText('Registered')
                axios.post(`${window.location.origin}/api/sendmail`, { data, user })
                  .then((res) => {
                    alert('Please Check your email for further details')
                  })
              })
          })
      }
    } else {
      setLoading(false)
    }
  }

  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Box sx={styles.content}>
          <Heading as="h3">
            {data && data.eventName}
          </Heading>
          <Text as="p">
            {data && data.eventInfo}
          </Text>
          <Text as="p" sx={{ margin: '0' }}>
            {data && data.fromSIGCE ? "For SIGCE students only" : 'For all students only'}
          </Text>
          <Text as="p" sx={{ margin: '0' }}>
            Event Mode: {data && data.offline ? "Offline" : 'Online'}
          </Text>
          <Text as="p">
            Event Date: <span style={{ fontWeight: 'bold' }}>{data && data.eventDate}, </span> Time: <span style={{ fontWeight: 'bold' }}>{data && data.eventTime}</span>
          </Text>
          <Heading as="h4">
            Speaker: <span style={{ fontWeight: 'bold' }}>{data && data.speaker}</span>
          </Heading>
          <Text as="p">
            Speaker Info: <span style={{ fontWeight: 'bold' }}>{data && data.speakerInfo}, </span>
          </Text>
          <Box as="form" sx={styles.form}>
            <Button disabled={loading || btnText === 'Already Registered'} onClick={registerEvent} type="button" sx={styles.form.button}>
              {loading ? <div className="nb-spinner"></div> : btnText}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterEvent;

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '130px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',
    height: '100vh'
  },
  container: {
    width: [null, null, null, null, null, null, '100%'],
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
      fontSize: [6, null, null, '36px', null, '55px', 9],
    },
    h4: {
      color: 'black',
      letterSpacing: ['-.7px', '0'],
      mb: ['15px', null, null, null, '20px'],
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
      marginTop: '-20px',
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      margin: '0 auto',
      mb: ['20px', null, null, null, null, '15px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '40vw'],
      textAlign: 'center',
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['10px 15px'],
      width: ['auto', null, null, null, '180px'],
      margin: '0 auto'
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none'],
    },
  },
  partner: {
    display: 'none',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
