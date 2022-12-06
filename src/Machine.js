module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
        this.totalmoney = 0
    }


    seeSelections() {
        return this.items;
    }

    deposit(amount){
        const allowedmoney = [10,20,50,100,500];
        const checkamount = allowedmoney.includes(amount);
        if (checkamount==true){
            this.totalmoney=this.totalmoney+amount;
            return "You have deposited Rs: " + this.totalmoney

        }
        else{
            return "Amount Rs: "+ amount + "Not Allowed"
        }


    }

    selectitem(code)
    {
        if (code  in this.items[0] || code  in this.items[1] || code in this.items[2] )
        {
            for (let i = 0; i < this.items.length; i++) {
                for (let j in this.items[i])
                if (code == j)
                {
                    const  amount = this.items[i][j];
                    const updatedamount = amount.split('Rs ')[1];
                    if (updatedamount>this.totalmoney){
                        const amounttoadd = updatedamount - this.totalmoney;
                        return "Your deposit is insufficient. Please add Rs " +amounttoadd + " for this item"
                    }
                    else{
                        const amount = this.totalmoney-updatedamount;
                        const obj = {item:code,change:amount}
                        return obj;

                    }
                }
            }

        }

        else{
            return "The item you selected is unavailable"
        }
    }
};

// var check = new Machine();
// console.log(check.deposit(10));
