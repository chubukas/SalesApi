// Create User Tables
exports.salesTable = `CREATE TABLE IF NOT EXISTS
      sales(
        id serial PRIMARY KEY NOT NULL,
        userName VARCHAR(255) NOT NULL,
        amount VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL
      )`;
