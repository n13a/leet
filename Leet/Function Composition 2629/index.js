/**
 * @param {Function[]} functions
 * @return {Function}
 */
compose = (functions) => (initialVal) => functions.reduceRight((v, f) => f(v), initialVal);