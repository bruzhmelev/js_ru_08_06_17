import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = articlesMap, action) => {
    const {type, payload, generatedId, articleId} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case ADD_COMMENT: 
            const tempState = { ...articleState };
            const tempArticle = { ...tempState[payload.articleId] };
            const tempComments = tempArticle.comments.concat(generatedId);
            tempArticle.comments = tempComments;
            tempState[payload.articleId] = tempArticle;
            return tempState;
    }

    return articleState
}