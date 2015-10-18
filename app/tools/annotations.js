/**
 * Annotation to puts into class ReactRouter properties.
 * @param path
 * @returns {Function}
 */
export function appRoute( path ) {
    return (target) => {
        target.path = path;
        target.component = target;
    }
}