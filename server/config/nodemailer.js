const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(clientData) {
    const transporter = nodemailer.createTransport({
      host: "smtp.postmarkapp.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const message = {
      from: '"EasyLife" <Customercare@easylifedc.be>',
      to: 'klantendienst@Easylifedc.be',
      subject: `Client ${clientData.voornaam} ${clientData.naam} wishes to stop`,
      html: `<p>Hi,</p> <p>I'm afraid the client with following details prefers to stop his/her contract with EasyLife</p>
      <p><b>Naam:</b>${clientData.naam}</p>
      <p><b>Voornaam:</b>${clientData.voornaam}</p>
      <p><b>Email:</b>${clientData.email}</p>
      <p><b>Phone:</b>${clientData.telefoonummer}</p>
      <p><b>Adress:</b>${clientData.adres}</p>
      <p><b>Reason for quiting:</b>${clientData.reason}</p>
      <p><b>Comments:</b>${clientData.comments}</p>
      <p>Go get them tiger!</p>
      `
    }

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log('Error occurred:' + err.message);
      }
      else console.log(info);
    })
  }
}