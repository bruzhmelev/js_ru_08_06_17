export default store => next => action => {
    if(!action.generateId) next(action);

    next({
        ...action, 
        generatedId: (Date.now() + Math.random()).toString()
    })
}