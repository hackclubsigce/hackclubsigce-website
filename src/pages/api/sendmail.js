import nodemailer from "nodemailer";

export default async (req, res) => {
	const { data, user } = req.body;
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.NEXT_PUBLIC_SMTP_USER,
			pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
		}
	});

	try {
		await transporter.sendMail({
			from: process.env.NEXT_PUBLIC_SMTP_USER,
			to: user.email,
			subject: data.emailSubject,
			html: `<p>Our beloved Participants,</p>
		  <p>${data.p1}.</p>
		  <p>${data.p2}</p>
		  <p>So see you at the program! We hope you come prepare with your doubts and queries and that you will have a great time! Thank you!</p>
		  <p>Time: <strong>${data.eventTime}</strong></p>
		  <p>Venue: <strong>${data.venue}</strong></p>
		  <p>Event Mode: <strong>${data.offline ? 'Offline' : 'Online'}</strong>, Audience: <strong>${data.fromSIGCE ? 'For SIGCE students only' : "For All Students"}</strong></p>
		`
		});
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
	return res.status(200).json({ success: true });
};