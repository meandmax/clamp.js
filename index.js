/**
 * Returns a function that clamps input values to range [min <= x <= max].
 * Useful for carousels etc without wrapping around (compare `wrap`).
 * Swapping min and max is allowed and will be corrected.
 *
 * @param  {int} min    The range minimum (optional).
 * @param  {int} max    The range maximum, inclusive.
 * @return {function}   The function that limits its input to the specified range.
 */
export default function clamp(min, max) {
    // Set min to 0 if only one value specified
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
    }

    // Swap min and max if required
    if (min > max) {
        let tmp = min;

        min = max;
        max = tmp;
    }

    return function(value) {
        return Math.min(Math.max(value, min), max);
    };
}
