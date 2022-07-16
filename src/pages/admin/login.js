import React, { useState } from 'react'
import { signIn } from '../../contexts/admin-auth';

const AdminLogin = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<>
			<div style={styles.page}>
				<form style={styles.form} >
					<h1 style={styles.adminLogin}>Admin Login</h1>
					<input style={styles.input} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
					<input style={styles.input} value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
					<button type='button' disabled={loading} style={styles.buttonStyle} onClick={() => { signIn(email, password, setLoading) }}>{loading ? <div>
						<div className="nb-spinner"></div>
					</div> : 'Send'}</button>
				</form>
			</div>
		</>
	)
}

export default AdminLogin


const styles = {
	adminLogin: {
		fontSize: '2.3rem',
		fontWeight: 'bold',
		lineHeight: '1',
		textAlign: 'center'
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
		width: '40vw',
		padding: '4rem',
		backgroundColor: '#eee',
		borderRadius: '0.75rem'
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
		width: '40vw',
		margin: '10px auto',
		cursor: 'pointer'
	}
};
