export const generateTimestampString = (): string => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day}_${hours}:${minutes}:${seconds}`
}

export const slugify = (str: string): string => {
    // Remove accents/diacritics
    const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÓÖÒÔÕŐØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňóöòôõőøřŕšťúůüùûýÿžÞþÐðßÆæŒœ'
    const to = 'AAAAAACCCDEEEEEEEEIIIINOOOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinoooooooorrstuuuuuyyzTtbDdBAaEe'
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
}

export const generateRandomString = (length: number = 5): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters.charAt(randomIndex)
    }
    return result
}

export const generateRandomFilename = () => {
    return generateTimestampString() + '-' + generateRandomString(5)
}

export const generatePath = (pathList: string[]): string => {
    return `${pathList.join('/')}/`
}
