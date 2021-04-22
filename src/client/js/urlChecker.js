function checkForURL(inputText) {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    if(regex.test(inputText))
        return true
    else
        return false
}

export { checkForURL }
