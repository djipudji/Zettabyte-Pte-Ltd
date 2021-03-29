const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')


const blogSchema = new mongoose.Schema({
    nameBlog: {
        type: String,
        required: false,
        default: null
    },
    descriptionBlog:{
        type: String,
        required: false,
        default: null
    },
    dateBlog:{
        type: Date,
        required: false,
        default: null
    },
    view:{
        type: Number,
        required: false,
        default: 0
    },
    
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    versionKey: false ,
    toJSON:{ getters:true }
})


blogSchema.plugin(mongoose_delete, {overrideMethods: 'all' }) 

module.exports = blog = mongoose.model('blog', blogSchema, 'blog');