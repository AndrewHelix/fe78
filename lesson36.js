"use strict";
class User {
    name; //можно отовсюду
    role; //только в самом классе и его наследниках
    // private passwordHash: string; //доступен только в самом классе
    #passwordHash; //доступен только в самом классе
    createdAt; //только для чтения
    constructor(name, passwordHash) {
        this.name = name;
        this.role = 'user';
        this.#passwordHash = passwordHash;
        this.createdAt = new Date();
    }
    checkPasswordHash(hash) {
        return this.#passwordHash === hash;
    }
    setRole(role) {
        this.role = role;
    }
}
class Admin extends User {
    constructor(name, passwordHash) {
        super(name, passwordHash);
        this.setRole('admin');
    }
    getRole() {
        return this.role;
    }
}
const user = new User('Alex', 'hash1');
console.log(user.name);
// user.checkPasswordHash('hash3')
// console.log(user.role) //error
// console.log(user.passwordHash)
// user.createdAt = new Date()
const admin = new Admin('Bob', 'hash2');
console.log(admin.getRole());
