export const getAuth = () => new Promise((resolve) => setTimeout(resolve, 3000)).then(() => { use: { name: 'Ben' } });