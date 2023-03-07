const express=require("express"); 
const app=express(); //init de l'app web
const port=3000; //port sur lequel le serv web est lancé

/*
function main(){

    app.get("/",(req, res)=>{
        const dt=new Date();
        res.send("Hello world"+dt);
        console.log(dt);
    })

    app.listen(port, function(){
        console.log(`serveur lancé sur port ${port} ` );
    });
}
main();
*/

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});

app.use(express.static("public"));