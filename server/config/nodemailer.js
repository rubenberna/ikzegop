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

    const supportMsg = {
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

    const clientMsg = {
      from: '"EasyLife" <Customercare@easylifedc.be>',
      to: `${clientData.email}`,
      subject: 'EasyLife - Klantendienst',
      html: `<p>Beste klant,</p> 
        <p>Wij hebben uw melding tot stopzetting van de overeenkomst goed ontvangen.</p>
        <p>U mag rekenen op een correcte en vlotte afhandeling.</p>
        <p>Wij willen heel graag de reden van de stopzetting met u bespreken en zullen u hier eerstdaags over contacteren.</p>
        <div>
          <p>Tot snel!</p>
        </div>
        <div>
          <p>Met vriendelijke groeten,</p>
          <p>Customer Care Department Easy Life</p>
          <p>Draaiboomstraat 6, 2160 Wommelgem</p>
          <p>03/369 89 03</p>
        </div>
      `
    }

    transporter.sendMail(supportMsg, (err, info) => {
      if (err) {
        console.log('Error occurred:' + err.message);
      }
      else console.log(info);
    })

    transporter.sendMail(clientMsg, (err, info) => {
      if (err) {
        console.log('Error occurred:' + err.message);
      }
      else console.log(info);
    })
  }
}