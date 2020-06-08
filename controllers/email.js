const nodemailer = require('nodemailer');
const path = require("path");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sindico.portal.do.condominio@gmail.com",
        pass: "portal2018"
    }
});

const enviarEmail = function (files, titulo, descricao, nome ) {

transporter.sendMail({
    From: "Portal do Condomínio <sindico.portal.do.condominio@gmail.com>",
    to: "sindico.portal.do.condominio@gmail.com",
    subject: "Novo cadastro",
    html: `<!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portal do Condomínio</title>
      
    </head>
    
    <body>
      <div style="margin: 10px;"><p style=" font-size: 2vw; color: green; font-weight: bold; font-family: sans-serif;">${nome} adicionou um novo classificado.</p></div>
    
      <section class="classificados-rows-two" style="width: 94%; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: flex-start;">
        <div class="classificados-conteudo" style="margin-bottom: 50px; margin: 14px; display: flex; flex-grow: 1; justify-content: center;">
          <div class="conteudo" style="width: 350px; min-height: 418px; margin-bottom: 20px; padding: 10px; border-radius: 20px; box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.12), -6px -6px 8px rgba(0, 0, 0, 0.12); border: 3px solid black;">
            <div class="classificados-foto"><img src="cid:imagem" style="width: 100%; height: 255px; border-radius: 20px 20px 0 0;" height="255"></div>
            <div class="classificados-titulo" style="width: 100%; padding: 7.5px 0; font-family: Roboto-Regular; color: #000000; font-size: 18px; font-weight: bold;">
              <p style="text-align: center;">${titulo} </p>
            </div>
            <div class="classificados-referencia" style="width: 100%; padding-bottom: 7.5px; font-family: Roboto-Regular; color: #000000; font-size: 16px;">
              <p style="text-align: center;">${nome} </p>
            </div>
            <div class="classificados-resumo" style="width: 92%; margin-left: 4%; font-style: unset; font-family: Roboto-Italic; color: #000000; font-size: 16px;">
              <p id="texto" style="text-align: center; height: 70px; font-size: 18px;">${descricao} </p>
            </div>
          </div>
        </div>
      </section>
      <div style="margin:20px 10px;">
        <p style="font-family: sans-serif; margin: 10px 10px;">Att,</p>
        <p style="font-family: sans-serif; margin: 10px 10px;">Portal do Condomínio</p>
        <img src="cid:logo">
    </div>
    </body>
    
    </html>`, 
    attachments: [
      {
        filename: "imagem.jpg",
        path: __dirname + "/../public/img/classificados/"+files,
        cid: "imagem"
      },
      {
        filename: "logo.png",
        path: __dirname + "/../public/img/logo/logo.png",
        cid: "logo"
      }
    ]
}).then( message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});

}

module.exports = enviarEmail;