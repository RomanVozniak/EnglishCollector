// API
export var api = {
    vocabulary: {
        getVocabulary: "/api/vocabulary",
        createVocab: "/api/vocabulary/create",
        updateVocab: "/api/vocabulary/update",
        deleteVocab: "/api/vocabulary/delete/",
        rememberryImport: "/api/vocabulary/rememberryImport"
    },
    cards: {
        getCards: "/api/cards",
        getCard: "/api/cards/get/",
        createCard: "/api/cards/add",
        updateCard: "/api/cards/update",
        deleteCard: "/api/cards/delete/",
    }
}

export var icons = {
    done: "done-24px.svg",
    edit: "create-24px.svg",
    clear: "clear-24px.svg"
}

export function convertToSelectOptions(data, labelCol, valueCol){
    let options = [];
    if (data != null) {
        data.map(function (option) {
            options.push({
                label: option[labelCol],
                value: option[valueCol]
            })
        })
    }
    return options;
}

