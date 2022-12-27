const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omshinde246@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
        html: '<h1>Hiii</h1>',
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'omshinde246@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. I hope to see you back sometime soon.`,
        html: '<h1>Byee</h1>',
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}