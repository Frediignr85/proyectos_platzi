enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const fredyUser: User = {
  username: "frediignr",
  role: ROLES.ADMIN,
}
console.log(fredyUser);
