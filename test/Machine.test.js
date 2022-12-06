const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected =[{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];

        // exercise
        const actual = machine.seeSelections();

        // assert
        expect(actual).toEqual(expected);
    });

    it('I want to know how much money I have deposited, so that I know what I can purchase.', () => {
        // setup
        const machine = new Machine();
        const expected ="You have deposited Rs: 100";

        // exercise
        const actual = machine.deposit(100);

        // assert

        expect(actual).toEqual(expected);
    });

    it('I want to add additional money, so that I can use the denominations I have to purchase an item.', () => {
        // setup
        const machine = new Machine();
        const expected ="You have deposited Rs: 150";

        // exercise
        const actual = machine.deposit(100);
        const actual1 = machine.deposit(50);

        // assert

        expect(actual1).toEqual(expected);
    });

    it('I want to see a message if my item is unavailable, so that I can make another choice.', () => {
        // setup
        const machine = new Machine();
        const expected ="The item you selected is unavailable";

        // exercise
        const actual = machine.selectitem('lays');

        // assert

        expect(actual).toEqual(expected);
    });

    it('I want to see a message if my deposit is insufficient, so that I know to add more money.', () => {
        // setup
        const machine = new Machine();
        const expected ="Your deposit is insufficient. Please add Rs 50 for this item";

        // exercise
        const actual1 = machine.deposit(50);
        const actual = machine.selectitem('crisps');

        // assert

        expect(actual).toEqual(expected);
    });

    it('I want to receive change, so that I don’t pay more than the item costs.', () => {
        // setup
        const machine = new Machine();
        const expected ={"change": 400, "item": "crisps"};

        // exercise
        const actual1 = machine.deposit(500);

        const actual = machine.selectitem('crisps');

        // assert

        expect(actual).toEqual(expected);
    });




});
