/*
 * Copyright (c) 2025 Yash Kushwaha
 * Licensed under the MIT License. See LICENSE file for details.
*/
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @returns A formatted string with the appropriate unit
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatSize(bytes: number): string {
    if(bytes === 0) return '0 bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    // Determine the appropriate unit by calculating the log
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // Format with 2 decimal places and round
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export const generateUUID = () => crypto.randomUUID()