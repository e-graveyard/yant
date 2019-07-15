/**
 * @module src/calculator
 */

/**
 * Calculator with basic operations.
 * @class
 */
exports.Calculator = class
{
    /**
     * Creates a new calculator.
     *
     * @param {number} operand - First operand.
     */
    constructor(operand)
    {
        this.result = operand;
    }

    /**
     * Adds a value to the current result.
     *
     * @param {number} value - The number value to be added.
     * @returns {object} - The class itself object.
     */
    plus(value)
    {
        this.result += value;
        return this;
    }

    /**
     * Subtracts a value to the current result.
     *
     * @param {number} value - The number value to be subtracted.
     * @returns {object} - The class itself object.
     */
    minus(value)
    {
        this.result -= value;
        return this;
    }

    /**
     * Divides the result by a given value.
     *
     * @param {number} value - The number to divide the result.
     * @returns {object} - The class itself object.
     */
    divided(value)
    {
        this.result /= value;
        return this;
    }

    /**
     * Multiplies the result by a given value.
     *
     * @param {number} value - The number to multiply the result.
     * @returns {object} - The class itself object.
     */
    times(value)
    {
        this.result *= value;
        return this;
    }

    /**
     * Finishes the calculation and returns the final result.
     *
     * @returns {number}
     */
    equals()
    {
        return this.result;
    }
};
