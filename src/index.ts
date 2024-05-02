import { Price } from "./types";
/**
 * calculate the 
 * @param {string} startDateString the start day (inclusive)
 * @param {string} endDateString The end day (inclusive)
 * @param {string[]} arr array of prices
 * @returns {number} total price of the whole duration
 */
export function calculatePrices(startDateString: string, endDateString: string, arr: Array<Price>): string {
    let totalPrice = 0;

    // Convert search start and end dates to Date objects
    const startDate = new Date(convertDateFormat(startDateString));
    const endDate = new Date(convertDateFormat(endDateString));

    // Initialize a map to keep track of prices for each day
    const priceMap = new Map();

    // Initialize priceMap with initial prices
    for (const item of arr) {
        const start_date = new Date(convertDateFormat(item.start_date));
        const end_date = new Date(convertDateFormat(item.end_date));
        const price = item.price;

        // Update priceMap for each day in the range
        for (let date = start_date; date <= end_date; date.setDate(date.getDate() + 1)) {
            const dateString = date.toISOString().split('T')[0];
            priceMap.set(dateString, price);
        }
    }

    // Loop through the days (inclusive) to calculate the total price
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const dateString = date.toISOString().split('T')[0];
        const price = priceMap.get(dateString);
        totalPrice += price;
    }

    return `$${totalPrice.toFixed(2)}`;
}

/**
 * Function to convert the date from dd/mm/yyyy format to mm/dd/yyyy format
 * @param {string} dateString date in dd/mm/yyyy format
 * @returns {string} date in mm/dd/yyyy format
 */
export function convertDateFormat(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    return `${month}/${day}/${year}`;
}
