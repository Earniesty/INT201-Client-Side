function findImageFile(file) {
    if (!file) return false
    const imageFiles = ['.jpg', '.jpeg', '.png', '.gif', '.svg']
    file = file.substring(file.lastIndexOf('.'))
    for (let imageFile of imageFiles) {
        if (file == imageFile) return true
    }
    return false
}

function findImageFileVerTwo(file) {
    if (!file) return false
    const imageFiles = ['.jpg', '.jpeg', '.png', '.gif', '.svg']
    for (let imageFile of imageFiles) {
        if (file.endsWith(imageFile)) return true
    }
    return false
}


console.log(findImageFile('image.jpg')) // true
console.log(findImageFile('image.jpeg')) // true
console.log(findImageFile('image.png')) // true
console.log(findImageFile('image.gif')) // true
console.log(findImageFile('image.svg')) // true
console.log(findImageFile('image.pdf')) // false
console.log(findImageFile('image.doc')) // false
console.log(findImageFile(null)) // false
console.log(findImageFile(undefined)) // false