import {normalizedComments as defaulComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload, generatedId} = action

    switch (type) {
        case ADD_COMMENT:
        const tempState = {...commentsState};
        tempState[generatedId] = {id: generatedId, user: payload.user, text: payload.text};
        return tempState;
    }

    return commentsState
}