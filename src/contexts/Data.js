import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./firebase_config";

const DataContext = createContext();

export function DataContextProvider({ children }) {
	const [eventData, setEventData] = useState()

	useEffect(() => {
		const q = query(collection(db, "EVENTS"), where("registrationsOpened", "==", true));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const arr = [];
			querySnapshot.forEach((doc) => {
				let obj = doc.data()
				obj.id = doc.id
				arr.push(obj);
			});
			setEventData(arr[0])
		});
		return () => {
			unsubscribe()
		};
	}, []);

	return (
		<DataContext.Provider value={{ eventData }}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}

