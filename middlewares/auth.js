const adminAuth = (req, res, next)=>{
    console.log('admin auth midlleware');
    const token = 'xyz';
    const isAdmin = token === 'xyz';
    if(!isAdmin){
        res.status(401).send('Not auth user');
    }else{
        next();
    }
}