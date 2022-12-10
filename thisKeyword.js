// this --> represents the current object

let laptop = {
    cpu: 'i9',
    ram: 8,
    brand: 'hp',
    getConfig: function () {
        console.log(this.ram);
    }

}
laptop.getConfig();