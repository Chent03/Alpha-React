import { NAVIGATE_USER } from './types';

export const navigateUser = (menu) => {
    return {
        type: NAVIGATE_USER,
        payload: menu
    }
}