let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
delete user.address.zip

user.address.country='UK'
console.log(user)

console.log(user.address.city)