import { addHours } from "date-fns"
import { format } from "date-fns-tz"

export function isNullEmptyOrUndefined(value: any) {
    return value == null || value == "" || value == undefined
}

export function formatDateToLocalTimezone(value: string) {
    const _date = new Date(value.substring(0,23))
    const date = addHours(_date, 3)
    return format(date, 'dd/MM/yyyy')
}

/**
* Helper function to identify if a franchise is Next
* @param {string} franchise - The franchise field
* @returns boolean
*/
export function isNextFranchise(franchise: string) {
    return franchise == "Franqueado Next" || franchise == "Franquia Next"
}

/**
* Helper function to identify if a franchise is QMAX
* @param {string} franchise - The franchise field
* @returns boolean
*/
export function isQmaxFranchise(franchise: string) {
    return franchise == "Franqueado QMAX" || franchise == "Franquia QMAX"
}

/**
* Helper function to identify if a franchise is Premium
* @param {string} franchise - The franchise field
* @returns boolean
*/
export function isPremiumFranchise(franchise: string) {
    return franchise == "Franqueado Premium" || franchise == "Franquia Premium"
}

/**
* Helper function to identify if a franchise is Direct Sales
* @param {string} franchise - The franchise field
* @returns boolean
*/
export function isDirectSales(franchise: string) {
    return franchise == "Vendas Diretas"
}

/**
* Helper function to identify if the installation is contracted
* @param {string} franchise - The franchise field
* @returns boolean
*/
export function isContractedInstallation(franchise: string) {
    return isQmaxFranchise(franchise) || isPremiumFranchise(franchise)
}

export function isEmail(email: string) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}