const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");
const {Moradores} = require("../models");

const userController = {
    create: (req, res) => {
        return res.render("auth/register", {msgCPF: ""})
    },

    store: async (req, res) => {
     
        // const db = new Sequelize(config);
        const {nome, cpf, email, senha, confirmarSenha, admin = 0, dataNascimento, id_apartamento} = req.body;
        
        const hashPassword = bcrypt.hashSync(senha, 10);

       try{           
        // Busca na base de moradores os registros com o mesmo CPF digitado no cadastro

        const cpfValidacao = await Moradores.findOne({where: {cpf: cpf}});
        
        // Cadastra o novo usuário na base caso não encontre o CPF informado
        if(!cpfValidacao) {

            if(senha == confirmarSenha){

                const user = await Moradores.create({
                    nome,
                    cpf, 
                    email, 
                    senha: hashPassword, 
                    foto: './img/user/fotoDefault.png',
                    admin,
                    dataNascimento,
                    id_apartamento,

                }) 
            } else {
                 return res.render("auth/register", {msgCPF: "As senhas devem ser iguais."});
            }
                

        } else {
             return res.render("auth/register", {msgCPF: "Erro ao cadastrar usuário. O CPF informado já está sendo utilizado."});
        }

        res.render("login", {msg: "", usuario: req.session.user});

    }catch (err){
        console.log(err, email);
    }
    },

  }; 

module.exports = userController;
