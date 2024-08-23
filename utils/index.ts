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
  
  export const preloadImage = (src: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to load image at ${src}`))
    })
  }