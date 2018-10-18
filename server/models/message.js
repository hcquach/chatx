const message = (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
      content: DataTypes.STRING,
    });
  
    Message.associate = models => {
      Message.belongsTo(models.User);
    };
  
    return Message;
  };
  
  export default message;