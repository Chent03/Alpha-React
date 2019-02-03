import { FETCH_FAVORITES } from '../../actions/types';
import favoriteReducer from '../favoriteReducer';

let initState;
const mockLoad = {
    movieList: [
        { title: 'Superman'},
        { title: 'Batman'}
    ]
}

describe('Favorite Reducer', () => {
    beforeEach(() => {
        initState = {
            loading: true,
            errorLoading: false,
            movieList: []
        }
    })

    it('handles action of type FETCH_FAVORITES', () => {
        const action = {
            type: FETCH_FAVORITES,
            payload: mockLoad
        }
        const newState = favoriteReducer(initState, action);
        expect(newState.movieList).toEqual(mockLoad)
    })

    it('does not handle action of unknown type', () => {
        const action = {
            type: 'fake_action',
            payload: 'fake_load'
        }

        const newState = favoriteReducer(initState, action);
        expect(newState).toEqual(initState);
    })
})