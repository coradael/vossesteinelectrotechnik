import sgMail from '@sendgrid/mail';

export type ContactFormInputType = {
	name: string;
	email: string;
	message?: string;
	subject?: string;
}

export default defineEventHandler(async (event) => {
	const body: ContactFormInputType = await readBody(event);

	try {
		if (!body.name) {
			throw createError({ statusCode: 400, message: 'Name is required' });
		}

		if (!body.email) {
			throw createError({ statusCode: 400, message: 'Email is required' });
		}

		let sendGridApiKey = process.env.SENDGRID_API_KEY;
		let sendGridEmail = process.env.SENDGRID_EMAIL;
		let sendGridToEmail = process.env.SENDGRID_TO_EMAIL;

		if (!sendGridApiKey) {
			return { statusCode: 500, body: 'SENDGRID_API_KEY is required' };
		}

		if (!sendGridEmail) {
			return { statusCode: 500, body: 'SENDGRID_EMAIL is required' };
		}

		if (!sendGridToEmail) {
			return { statusCode: 500, body: 'SENDGRID_TO_EMAIL is required' };
		}


		sgMail.setApiKey(sendGridApiKey);

		const msg = {
			replyTo: body.email,
			to: sendGridToEmail,
			from: sendGridEmail,
			subject: body.subject || 'Contact Website',
			text: `${body.name} heeft een bericht gestuurd via het contactformulier op de website.\n\nNaam: ${body.name}\nEmail: ${body.email}\nBericht: ${body.message}`,
		}

		sgMail.send(msg).then((response: any) => {
			console.log(response[0].statusCode);
			console.log(response[0].headers);
		}).catch((error: any) => {
			console.error(error);
			return { statusCode: 500, body: 'Email not sent' };
		});

		return { statusCode: 200, body: 'Email sent' };

	}
	catch (error: any) {
		console.error(error);
		return { statusCode: error.statusCode, body: error.message };
	}



});


