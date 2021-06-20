const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    accountNo:{
        type: Number,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    history:[{
        from:{
            type: Schema.Types.ObjectId,
            ref: 'account-detail'
        },
        to:{
            type: Schema.Types.ObjectId,
            ref: 'account-detail'
        },
        action:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }
    }],
    date:{
        type: Date,
        default: Date.now
    }
})

// eslint-disable-next-line no-undef
module.exports = Detail = mongoose.model('account-detail', accountSchema)