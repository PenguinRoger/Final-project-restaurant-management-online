import Models from '../models'
import UserContext from './UserContext'
export interface AppContext {
    models: Models
    users: UserContext
}
