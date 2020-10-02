const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const handlebars = require("handlebars");
const path = require("path");
const fs = require('fs');

require('dotenv/config');

const auth = {
    auth: {
        api_key: process.env.HEROKUKEY,
        domain: process.env.HEROKUDOMAIN
    }
};

const emailTemplateSource = fs.readFileSync(path.join(__dirname, "/template.hbs"), "utf8")
const transporter = nodemailer.createTransport(mailGun(auth));
const template = handlebars.compile(emailTemplateSource)

const sendMail = (name, email, country, subject, phone, message, requests, cb) => {

    const htmlToSend = template({ name, country, email, phone, message, requests: requests })

    const mailOptions = {
        from: email,
        to: "akimzzy@gmail.com",
        subject,
        text: subject,
        html: htmlToSend
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })

};

module.exports = sendMail;