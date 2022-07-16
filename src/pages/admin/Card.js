import React from 'react'

const Card = ({ data }) => {
	return (
		<>
			<div style={{ width: '100%' }}>
				<div style={{ fontSize: '18px', width: '100%', fontWeight: 'bold' }}>Event: {data.eventName}</div>
				<div style={{ fontSize: '18px', width: '100%' }}>Date: {data.eventDate}</div>
				<div style={{ fontSize: '18px', width: '100%' }}>Speaker: {data.speaker}</div>
				<div style={{ fontSize: '18px', width: '100%' }}>{data.registrations} registrations</div>
			</div>
		</>
	)
}

export default Card