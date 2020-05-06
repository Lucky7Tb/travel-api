'use strict'

class RandomString{
    static randomString(){
        let randomString = '';
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i = 0; i<5; i++){
            randomString += char.charAt ( Math.floor(Math.random() * char.length ) );
        }
        return randomString;
    }
}

module.exports = RandomString