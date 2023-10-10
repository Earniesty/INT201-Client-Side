// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

function allIsUpperCase(message) {
    return message === message.toUpperCase() && message !== message.toLowerCase();
}

function hey(message){
    message = message.trim()
    if (message === null || message === '') return 'Fine. Be that way!'
    let wordWithOutEnd = message.slice(0, message.length)
    let wordEndWith = message.slice(-1)
    if (wordEndWith === '?') {
        if (allIsUpperCase(wordWithOutEnd)) return `Calm down, I know what I'm doing!`
        return 'Sure.'
    }
    if (wordEndWith === '!' || (allIsUpperCase(wordWithOutEnd) && wordEndWith !== '!')){
        if (!allIsUpperCase(wordWithOutEnd)) return `Whatever.`
        return `Whoa, chill out!`
    }
    else return 'Whatever.'
}