class user1 {
    constructor(username, password, email){
        this.username = username;
       this.password = password;
       this.email = email;
    }

    getUserId(){
        return `${this.username}`;
    }

    getEncreyptedPassword(){
        return `${this.password}abc`
    }
}

const u1 = new  user1(`aditya`, `123`, "aditya@example.com");
console.log(u1.getEncreyptedPassword())
console.log(u1.getUserId())


//----------------------How it works under the hood------------------------

function user2(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}

user2.prototype.encryptUserPass = function(){
    return `${this.password}987`;
}

user2.prototype.usernameUppercase = function(){
    return this.username.toUpperCase();
}

const u2 = new user2("Yudi", "xyz", "yudi@example.com");
console.log(u2.encryptUserPass());
console.log(u2.usernameUppercase());