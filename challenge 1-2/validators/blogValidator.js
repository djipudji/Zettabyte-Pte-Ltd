const {
    check,
    validationResult,
    matchedData,
    sanitize
  } = require('express-validator') //form validation & sanitize form params
const {blog} = require('../models/index')

module.exports = {
   create:[
       check('nameBlog', 'must be fill, min 5 and max 35 character').isString().notEmpty().isLength({
        min: 5,
        max: 35
      }),
       check('descriptionBlog','must be fill').isString().notEmpty(),
       (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({
            errors: errors.mapped()
          })
        }
        next();
      }
   ],
   update:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    check('nameBlog', 'must be fill must be fill, min 5 and max 35 character').isString().notEmpty().isLength({
      min: 5,
      max: 35
    }),
    check('descriptionBlog','must be fill').isString().notEmpty(),
    (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(422).json({
         errors: errors.mapped()
       })
     }
     next();
   }
   ],
   getOne:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    (req, res, next)=>{
      const error = validationResult(req);
      if(!error.isEmpty()){
        return res.status(422).json({
          error: error.mapped()
        })
      }
      next();
    }

   ],
   delete:[
    check('_id', 'must be fill').custom(async (value, {req}) => {
      try {
        if((value.length != 24) ) {
          throw new Error(`ID must 24 character!`)
        };
        let findBlog = await blog.findOne({
          _id: value
        });

        if(!findBlog) {
          throw new Error(`ID not found`)
        }
      } catch(e) {
        throw new Error(e)
      }
    }),
    (req, res, next)=>{
      const error = validationResult(req);
      if(!error.isEmpty()){
        return res.status(422).json({
          error: error.mapped()
        })
      }
      next();
    }
   ] 


}
