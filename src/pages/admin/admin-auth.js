import { useAuthContext } from "contexts/Auth";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import { auth } from '../../contexts/firebase_config'

export let user = undefined

export const handleSignOut = () => {
	signOut(auth).then(() => {
		// Sign-out successful.
	}).catch((error) => {
		// An error happened.
	});
}
export const signIn = (email, password, setLoading) => {
	setLoading(true)
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const currentUser = userCredential.user;
			user = currentUser
			if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
				setLoading(false)
				router.push('/admin/')
			} else {
				handleSignOut()
			}
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			setLoading(false)
		});
}

const userStateManagement = () => {
	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			user = currentUser
			console.log(user)
		} else {
			user = undefined
		}
	});
}

userStateManagement()