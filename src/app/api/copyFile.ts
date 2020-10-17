import { Router } from 'express';

const router = Router() ;
const fs = require('fs') ;


router.post('/create' , (req, res) => {

try {
    fs.copyFileSync( '../../Files/file1.txt' , '../../Files/newFile.txt' );
    console.log(' file was sucsessfully created');
    
} catch (error) {
    console.log('error : ', error);
}

})

export default router ;