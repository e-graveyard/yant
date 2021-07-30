/**
 * @module src/lib/Logger
 */

import { transports as transport, format as fmt, createLogger } from 'winston'

/**
 * Logger helper.
 * @class
 */
export default class {
  /**
   * Creates a new console logger.
   * @param {object} config - Configuration with "isDev" flag and log "label".
   */
  constructor (config) {
    const { isDev, label } = config || {}

    this.isDev = Boolean(isDev)
    this.label = label ?? ''
    this.logger = createLogger({ transports: [this.createConsoleLogger()] })
  }

  /**
   * Creates a Winston console transport.
   * @returns {object} - The transport object.
   */
  createConsoleLogger () {
    const f = [fmt.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), fmt.label({ label: this.label })]

    if (this.isDev) {
      f.push(fmt.colorize({ all: true }))
    }

    if (this.label === '') {
      f.push(fmt.printf((i) => `${i.timestamp} ${i.level}: ${i.message}`))
    } else {
      f.push(fmt.printf((i) => `${i.timestamp} (${i.label}) -- ${i.level}: ${i.message}`))
    }

    return new transport.Console({ format: fmt.combine(...f) })
  }

  /**
   * Emits an informational log message.
   * @param {string} message - The log message.
   * @param {object} [data] - Additional data to be shown, such as an HTTP response object.
   */
  info (message, data) {
    this.logger.info(message, data)
  }

  /**
   * Emits a warning log message.
   * @param {string} message - The log message.
   * @param {object} [data] - Additional data to be shown, such as an error object.
   */
  warn (message, data) {
    this.logger.warn(message, data)
  }

  /**
   * Emits an error log message.
   * @param {string} message - The log message.
   * @param {object} [data] - Additional data to be shown, such as an error object.
   */
  error (message, data) {
    this.logger.error(message, data)
  }
}
