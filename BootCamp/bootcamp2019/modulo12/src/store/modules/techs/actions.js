export function addTech(tech) {
    return {
        type: 'ADD_TECH',
        payload: { tech }
    }
}

export function getTechSuccess(data) {
    return {
        type: 'GET_TECHS_SUCCESS',
        playload: {
            data
        }
    }
}

export function getTechsFailure(){
    return {
        type: 'GET_TECHS_FAILURE'
    }
}