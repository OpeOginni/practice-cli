#!/usr/bin/env node

import fs from "fs"
import { Command } from "commander"


// Declare the Program

const program = new Command()

// Add actions onto that CLI

program
    .argument("<string>", "string to log")
    .option("-c, --capitalize", "Capitalize the string")
    .action((message: string, opts: {
        capitalize?: boolean
    }) => {
        if (opts.capitalize) {
            message = message.toUpperCase()
        }
        console.log(`Hello ${message}`)
    })
    .description("Say Hello")

program
    .command("add <numbers...>")
    .action((numbers: number[]) => {
        const total = numbers.reduce((a, b) => a + b, 0)
        console.log(`Total: ${total}`)
    }).description("Add Numbers and log the total")

program
    .command("get-max-number <numbers...>")
    .action((numbers: number[]) => {
        const max = Math.max(...numbers)
        console.log(`Max: ${max}`)
    }).description("Logs out the max number from the given list of numbers")

// Execute the CLI with the given arguments

program.parse(process.argv)