export const validateEmail = (email) => {

    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
} 

export const validatePassword = (password) => {
    return password.length >= 6
}