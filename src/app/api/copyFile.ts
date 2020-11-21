import { Router } from 'express';
const path = require ('path') ;


const router = Router() ;
const fs = require('fs') ;


router.post('/create' , (req, res) => {

try {
 console.log(req);
   
     fs.copyFileSync( 'dist/test.txt' , 'dist/'+req.body.fname+'.txt' );
    console.log(' file was sucsessfully created');
    
    
} catch (error) {
    console.log('error : ', error);
}

});


router.get('/test' , (req , res) => {

    try {       res.json('hello')

    } catch (error) {
        
    }

});



export default router ;

