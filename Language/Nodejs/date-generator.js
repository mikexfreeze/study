var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
date = date.replace(/-/g, '').substring(0,8)
console.log(date)