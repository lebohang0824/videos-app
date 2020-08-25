const sgMail = require('@sendgrid/mail')

export default async (req, res) => {

    const apiKey = process.env.SENDGRID_API_KEY;
    
    if (req.method === 'POST') {

        const { name, email, comment } = req.body; 

        const msg = {
            to: email,
            from: 'lebohang0824@gmail.com',
            subject: `Message from ${name}`,
            text: `The comment section says: ${comment}`,
            html: `<p>The comment section says: <strong>${comment}</strong></p>`,
        }
        
        try {

            await sgMail.setApiKey(apiKey)
            await sgMail.send(msg);
    
            res.status(200)
                .json({ success: true, data: 'Success' })

        } catch (error) {
            res.status(error.code)
                .json({ success: false, data: error })
        }
    }
}
  