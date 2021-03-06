module.exports = (sequelize, DataTypes) => {
    const Apartamento = sequelize.define(
      "Apartamentos",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        numeroApto:{ 
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      
        bloco: DataTypes.STRING,

        condominio_id:{
            type: DataTypes.INTEGER,
        }

         
      }, {
        
        timestamps:false, 
    })
  
    Apartamento.associate = models => {
      Apartamento.hasMany(models.Morador, {
        as: 'morador',
      })
    }; 
    
    Apartamento.associate  = (listaDeModelos) =>{
          Apartamento.belongsTo(listaDeModelos.Condominio,{
              foreignKey:'condominio_id',
              as: 'condominio',
          })
      };


    return Apartamento;
  };
  