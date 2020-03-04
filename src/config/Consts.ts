export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Messages
export const mLatestRelease = (name: string, date: string) => `Latest release is ${name} released at ${date}. List assets?`
