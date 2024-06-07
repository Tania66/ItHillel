const user = {
  name: "Bublick",
  city: "Kyiv",
  email: "bublick@gmail.com",

  getUser() {
    return `User ${this.name} live in ${this.city}, email: ${this.email}`;
  },
};

console.log(user.getUser());
