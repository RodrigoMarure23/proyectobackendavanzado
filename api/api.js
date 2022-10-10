import express from 'express';
const api = express();
//TODO: registrar middlewares y rutas


api.use(express.json());


api.get('/status',(req,res)=>{
    return res.json({
        msg:"API WORKING 👋🏼"
    });
});

export default api;