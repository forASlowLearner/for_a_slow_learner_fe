import axios from 'axios';

export const saveUserInfo = async (name: string, birthday: string) => {
    try {
        const response = await axios.post('/api/saveUserInfo', { name, birthday });
        return response;
    } catch (error) {
        throw error;
    }
};
