/**
 * Get the absolute path of the lib directory based on the current module.
 * @function
 * @name getAbsoluteLibDirPath
 * @memberof utils
 * @returns {string} The full path to the lib directory.
 * @example
 *
 * // Example usage:
 * const libDirPath = getAbsoluteLibDirPath();
 * console.log(libDirPath); // "lib/full/path/to/directory"
 */
function getAbsoluteLibDirPath() {
  const currentModuleFullPath = import.meta.url;
  let baselibPath = currentModuleFullPath.match(/(.*lib)(.*)/)[1];
  baselibPath = baselibPath.replace('file://', '');

  return baselibPath;
}

export default getAbsoluteLibDirPath;
