const { calculatePrices, convertDateFormat, dateObject } = require('../lib/index');


describe('index.ts', () => {
    describe('calculatePrices', () => {
        it('Should return 73 dollars from the prices in the first example', () => {
            const firstExamplPrices = [
                { start_date: "5/1/2022", end_date: "15/1/2022", price: 5 },
                { start_date: "1/1/2022", end_date: "11/1/2022", price: 3 },
                { start_date: "2/1/2022", end_date: "13/1/2022", price: 10 },
                { start_date: "2/1/2022", end_date: "11/1/2022", price: 4 }
            ];
            expect(calculatePrices('1/1/2022', '15/1/2022', firstExamplPrices)).toEqual('$73.00');
        });

        it('Should return 45 dollars from the prices in the second example', () => {
            const secnodExamplePrices = [
                { start_date: "1/1/2022", end_date: "19/1/2022", price: 5 },
                { start_date: "4/1/2022", end_date: "11/1/2022", price: 10 },
                { start_date: "15/1/2022", end_date: "22/1/2022", price: 7 },
                { start_date: "3/1/2022", end_date: "12/1/2022", price: 3 }
            ];
            expect(calculatePrices('1/1/2022', '13/1/2022', secnodExamplePrices)).toEqual('$45.00');
        });
    });
    describe('convertDateFormat', () => {
        it('Should convert date from one format to another', () => {
            const date = '30/9/2024';
            expect(convertDateFormat(date)).toEqual('9/30/2024');
        });
    });
});
