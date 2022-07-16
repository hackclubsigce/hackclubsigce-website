import { useAuthContext } from 'contexts/Auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { user } from './admin-auth'
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from 'contexts/firebase_config';
import Card from './Card';

const Admin = () => {
	const router = useRouter()
	const { handleSignOut } = useAuthContext()
	const [events, setEvents] = useState([])
	const [event, setEvent] = useState('');
	const [eventInfo, setEventInfo] = useState('')
	const [speaker, setSpeaker] = useState('');
	const [eventDate, setEventDate] = useState('')
	const [emailSubject, setEmailSubject] = useState('')
	const [p1, setP1] = useState('')
	const [p2, setP2] = useState('')
	const [eventTime, setEventTime] = useState('')
	const [homepageRegisterContent, setHomepageRegisterContent] = useState('')
	const [venue, setVenue] = useState('')
	const [fromSIGCE, setFromSIGCE] = useState('')
	const [offline, setOffline] = useState('')
	const [speakerInfo, setSpeakerInfo] = useState('')
	const [speakerSocials, setSpeakerSocials] = useState([])
	const [loading, setLoading] = useState(false)

	const createEvent = async () => {
		setLoading(true)
		if (user) {
			const date = new Date()
			const docRef = await addDoc(collection(db, "EVENTS"), {
				eventName: event,
				eventInfo: eventInfo,
				speaker: speaker,
				eventDate: eventDate,
				homepageRegisterContent: homepageRegisterContent,
				speakerInfo: speakerInfo,
				date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
				registrations: 0,
				registrationsOpened: true,
				eventTime: eventTime,
				p1: p1,
				p2: p2,
				fromSIGCE: true,
				offline: true,
				venue: venue
			})
				.then(() => {
					setLoading(false)
				})
				.catch((err) => {
					console.log(err)
					setLoading(false)
				})
		}
	}
	useEffect(() => {
		if (user) {
			if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
				const q = query(collection(db, "EVENTS"));
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const arr = [];
					querySnapshot.forEach((doc) => {
						let obj = doc.data()
						obj.id = doc.id
						arr.push(obj);
					});
					console.log(arr);
					setEvents(arr)
				});

			} else {
				handleSignOut()
				router.push('/admin/login')
			}
		} else {
			router.push('/admin/login')
		}
	}, [user]);

	return (
		<>
			<div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
				<div style={{ width: '50vw', padding: '2rem' }}>
					<form style={styles.form} >
						<h1 style={styles.eventDetails}>Create Event</h1>
						<input style={styles.input} placeholder='Event Name' value={event} onChange={(e) => { setEvent(e.target.value) }} />
						<input style={styles.input} placeholder='Speaker Name' value={speaker} onChange={(e) => { setSpeaker(e.target.value) }} />
						<input style={styles.input} placeholder='Event Date' value={eventDate} onChange={(e) => { setEventDate(e.target.value) }} />
						<input style={styles.input} placeholder='Event Time' value={eventTime} onChange={(e) => { setEventTime(e.target.value) }} />
						<input style={styles.input} placeholder='Email Subject' value={emailSubject} onChange={(e) => { setEmailSubject(e.target.value) }} />
						<input style={styles.input} placeholder='Event Venue' value={venue} onChange={(e) => { setVenue(e.target.value) }} />
						<select style={styles.input} placeholder='Event Mode' value={offline} onChange={(e) => { setOffline(e.target.value) }}>
							<option value={""} key={""}>Select Event Mode</option>
							<option value={false} key={false}>Online</option>
							<option value={true} key={true}>Offline</option>
						</select>
						<select style={styles.input} placeholder='Event Audience' value={fromSIGCE} onChange={(e) => { setFromSIGCE(e.target.value) }}>
							<option value={""} key={""}>Select Targeted Event Audience</option>
							<option value={true} key={true}>From SIGCE Only</option>
							<option value={false} key={false}>From Any college</option>
						</select>
						<textarea style={styles.textarea} placeholder='Event Info' value={eventInfo} onChange={(e) => { setEventInfo(e.target.value) }} ></textarea>
						<textarea style={styles.textarea} placeholder='Speaker Info' value={speakerInfo} onChange={(e) => { setSpeakerInfo(e.target.value) }} ></textarea>
						<textarea style={styles.textarea} placeholder='Home page register content' value={homepageRegisterContent} onChange={(e) => { setHomepageRegisterContent(e.target.value) }} ></textarea>
						<textarea style={styles.textarea} placeholder='Email Paragraph1' value={p1} onChange={(e) => { setP1(e.target.value) }} ></textarea>
						<textarea style={styles.textarea} placeholder='Email Paragraph2' value={p2} onChange={(e) => { setP2(e.target.value) }} ></textarea>
						<button type='button' disabled={loading} style={styles.buttonStyle} onClick={createEvent}>{loading ? <div>
							<div className="nb-spinner"></div>
						</div> : 'Submit'}</button>
					</form>
				</div>
				<div style={{ width: '50vw', padding: '2rem' }}>
					{
						events && events.map((data) => {
							return <Card data={data} />
						})
					}
				</div>
			</div>
		</>
	)
}

export default Admin

const styles = {
	eventDetails: {
		fontSize: '2.3rem',
		fontWeight: 'bold',
		lineHeight: '1',
		textAlign: 'center',
		marginTop: '0'
	},
	page: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '4rem',
		backgroundColor: '#eee',
		borderRadius: '0.75rem',
		margin: '0 auto'
	},
	input: {
		padding: '1rem',
		border: '2px solid rgba(0,0,0,0.05)',
		borderRadius: '0.5rem',
		backgroundColor: '#F8FAFC',
		margin: '10px 0',
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
		border: '0px',
		width: '100%',
		margin: '10px auto',
		cursor: 'pointer'
	},
	textarea: {
		padding: '1rem 1rem',
		height: '140px',
		border: '2px solid rgba(0,0,0,0.05)',
		borderRadius: '0.5rem',
		backgroundColor: '#F8FAFC',
		margin: '10px 0',
		resize: 'none',
		outline: 'none',
		fontFamily: 'Nunito'
	},
};
