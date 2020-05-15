module.exports = (sequelize, DataTypes) => {
  const Solicitacao = sequelize.define(
    "solicitacoes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      data: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: ['Em análise','Indeferida','Deferida'],
        allowNull: false,
      },
      createAt: DataTypes.DATE,
      updateAt: DataTypes.DATE,
    },{
      tableName: 'solicitacoes',
      timestamps:false, 
  })

  return Solicitacao;
};