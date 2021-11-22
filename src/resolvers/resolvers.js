const users = [
  {
    id: 1,
    name: "Eduardo",
    email: "edutraquino@gmail.com",
  },
  {
    id: 2,
    name: "Igor",
    email: "igortraquino@gmail.com",
  },
];

module.exports = {
  Query: {
    users: () => users,
    user: (_, id) => users[0],
  },

  Mutation: {
    createUser: () => users[0],
  },
};
