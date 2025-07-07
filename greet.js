module.exports = function(name){
    this.name = name
    this.greetings = function(){
        return "Hello " + this.name;
    }
}