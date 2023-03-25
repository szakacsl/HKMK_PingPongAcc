// mysql
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Pandoricsima1.",
    DB: "hackmk",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
// // mongodb
// module.exports = {
//     HOST: "localhost",
//     USER: "boldizsarzoltan3",
//     PASSWORD: "cl166Iavl27i3lOB",
//     DB: "testdb",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };