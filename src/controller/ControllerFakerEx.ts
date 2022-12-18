const faker = require('faker');

faker.locale = 'pt_BR';
const clients = [];

for (let index = 0; index < 10; index++) {
  const name = faker.name.findName();
  const email = faker.internet.email(name);
  const phone = faker.phone.phoneNumber();
  const birth = faker.date.past(30, 2022);

  const client = {
    name,
    email,
    phone,
    birth,
  }

  clients.push(client);
  
}
console.log(clients);