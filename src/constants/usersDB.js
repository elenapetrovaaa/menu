const users = [
    {
        id: 1,
        login: 'user1',
        password: '123'
    },
    {
        id: 2,
        login: 'user2',
        password: '321'
    }
]

export const loginUser = (user) => users.find(x => x.login === user.login && x.password === user.password)

export const registerUser = (user) => {
    const isExist = users.find(x => x.login === users.login)
    if (!isExist) {
        users.push({
            ...user, id: users.length + 1
        })    
    }
}

export const getAllUsers = () => users;