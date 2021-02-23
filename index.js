var {Pool} = require("pg");


async function consultar () {

var pool = new Pool ({

connectionString: 'postgres://lspugqzpqiurbc:6b080a2f1e9883a30c99cf8692d835df5daf1b9d7e3f80c65f705f5eb1ca153d@ec2-52-22-161-59.compute-1.amazonaws.com:5432/dc1aaa46t0nfop',

ssl: {

rejectUnauthorized: false

}

})

await connection.query(

    `create table cliente (
    
    nome varchar(100),
    
    sobrenome varchar(100),
    
    id serial PRIMARY KEY,
    
    endereço varchar(100),
    
    pedido varchar(100),
    
    dados varchar(100)
    
    )`);
    
    await connection.query("insert into cliente (nome) values ($1)", ["Júlio César"]);
    await connection.query("insert into cliente (nome) values ($1)", ["Silva"]);
    await connection.query("insert into cliente (nome) values ($1)", ["Thanos"]);
    
let connection = await pool.connect();
connection.query(`insert into cliente (nome) values ($1)`, ['Duda']);
let res = await connection.query(`select * from cliente where nome like 'Thanos'`);
let res1 = await connection.query(`select nome from cliente where nome like 'Silva'`)
console.log(res.rows[0]);
console.log(res1.rows[0])
connection.release();
}

consultar();