const mongoose = require('mongoose');

const entrySchema = mongoose.Schema(
    {
        titular:String,
        numeroTarjeta:Number,
        fechaCaducidad:String,
        cvv:Number,
        fechaCreacion:{
            type:Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('tarjeta', entrySchema)

/* mongodb+srv://sufianeh8:PHYiI7r31iFZJtfw@cluster0.xhejdrs.mongodb.net/Bank?retryWrites=true&w=majority&appName=Cluster0 */