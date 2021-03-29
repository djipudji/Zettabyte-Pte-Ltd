const {blog} = require('../models/index'); // Import campaign and history
const blogService = require('../service/blogService') 
class blogController {
    // CHALLENGE 2
    async create(req, res){
        try {
            let createBlog = await blog.create({
                nameBlog : req.body.nameBlog,
                descriptionBlog : req.body.descriptionBlog,
                dateBlog : new Date
            })
            
            let newBlog = await blog.findOne({
                _id: createBlog._id
            }, 'nameBlog descriptionBlog dateBlog view');

            return res.status(200).json({
                status: 'success create blog',
                data: newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status:'error'
            })
            
        }
    }

    async update(req, res){
        try {
            let updateBlog = await blog.findOneAndUpdate({
                _id: req.params._id
            },{
                nameBlog : req.body.nameBlog,
                descriptionBlog: req.body.descriptionBlog
            },{
                new: true
            });
            
            let newBlog = await blog.findOne({
                _id: updateBlog._id
            }, 'nameBlog descriptionBlog dateBlog view updated_at')

            return res.status(200).json({
                status: 'success update blog',
                data: newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            });
            
        }
    }

    async getAll(req, res){
        try { 
            let newBlog = await blogService.getAll()
            return res.status(200).json({
                status: 'success get all blog',
                data: newBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            }) 
        }
    }

    async getOne(req, res){
        try {
            let newBlog = await blog.findOne({
                _id : req.params._id
            },'nameBlog descriptionBlog dateBlog view')
        
            let sumView;
             if(newBlog.view==0){
                sumView = 1
            } else {
                sumView = newBlog.view +1
            }
            let updateBlog = await blog.findOneAndUpdate({
                _id : req.params._id
            },{
                $set: {
                    view :sumView
                }    
            }, {
                new: true
            })
            return res.status(200).json({
                status: 'succes get one blog',
                data : updateBlog
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            })
        }
    }

    async getPopuler(req,res){
       try {
           let result = await blogService.getPopuler()
         return res.status(200).json({
            status: "Succes get all the data",
            data: result
         });
       } catch (e) {
        return res.status(500).json({
            status: 'error',
            error: e
        })
       }
    }
    // CHALENGE 3
    async getHomepage(req,res){
        async function getInParallel(apiCalls) { 
            let data = apiCalls.map((el) => {
                return el()
              })
              return Promise.all(data).then((result) => {
                return result
              })
            } 
            let promise = getInParallel([() => Promise.resolve( blogService.getAll()), 
            () => Promise.resolve(blogService.getPopuler())]); 
            if(promise) { 
                promise.then((result) => res.json(result)).catch((err) => res.json(err)); 
                } 
    }

    async delete(req, res){
       blog.delete({
           _id: req.params._id
       }).then(() => {
           res.json({
               status: 'success delete blog',
               data: null
           })
       })
};
}

    

module.exports = new blogController
