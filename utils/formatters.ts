export const formatName = (name: string): string => {
    return name
      .split('-')
      .map((word) => {
        const firstLetter = word.charAt(0).toUpperCase()
        const restOfWord = word.slice(1)
        return firstLetter + restOfWord
      })
      .join(' ')
  }
  