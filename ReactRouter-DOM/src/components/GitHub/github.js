 const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Vijeshbairagi')
    return response.json()
}
 
export default githubInfoLoader;