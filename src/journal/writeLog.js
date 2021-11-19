module.exports = function(msg,type = 'log'){
    console[type](msg)
    this.writeText('journallog/main.txt',msg+'\n')
}