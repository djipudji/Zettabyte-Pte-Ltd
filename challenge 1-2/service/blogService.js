const {blog} = require('../models/index')

class blogService{
getAll=()=>{
    let newBlog = blog.find({},
        'nameBlog descriptionBlog dateBlog')
        .limit(10)
    return newBlog
}

getPopuler=()=>{
    let result = blog.find({
          })
          .sort({
           view: -1
           })
           .limit(5)
    return result
}

}

module.exports = new blogService