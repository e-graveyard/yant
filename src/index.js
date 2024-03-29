import Calculator from '@yant/Calculator'
import Logger from '@yant/lib/Logger'

const logger = new Logger({ isDev: true, label: 'yant' })

/**
 * Repeats a given callback function N times.
 *
 * @param {number} n - the amount of times to repeat.
 * @param {function} cb - the callback function.
 */
const each = (n, cb) => Array.from(Array(n).keys()).forEach(cb)

/**
 * Calculate and outputs a multiplication table of a given value.
 *
 * @param {number} operand - the multiplication number.
 */
function multiplicationTable (operand) {
  logger.warn('-'.repeat(30))
  logger.warn(`Times table of ${operand}:`)

  each(10, (_, i) => {
    const iter = i + 1
    const result = new Calculator(iter).times(operand).equals()

    logger.info(`${iter} x ${operand} = ${result}`)
  })
}

each(10, (_, i) => multiplicationTable(i + 1))
