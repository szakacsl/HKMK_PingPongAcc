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
//     HOST: "mysql-117685-0.cloudclusters.net",
//     USER: "admin",
//     PASSWORD: "43sUXYqI.",
//     PORT: 10043,
//     DB: "hackmk",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };