
  
 export  async function SimLoading(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("resolved");
        }, 1500)
    })
}
