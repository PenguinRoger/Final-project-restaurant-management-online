export default interface UserContext {
    userID: string
    personCode: string
    getUserSite : () => Promise<number[]>
}
