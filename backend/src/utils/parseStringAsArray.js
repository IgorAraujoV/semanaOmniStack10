module.exports = function parseStringAsAray(array) {
    return array.split(',').map(item => item.trim());
}