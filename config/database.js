module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Pandoricsima1.",
    PORT: 3306,
    DB: "hackmk",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
// module.exports = {
//     HOST: "sql7.freemysqlhosting.net",
//     USER: "sql7608586",
//     PASSWORD: "8KF9YwbL4e",
//     PORT: 3306,
//     DB: "sql7608586",
//     dialect: "mysql",
//     pool: {
//         max: 1,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };