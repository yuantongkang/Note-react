import fetch from '@/helpers/fetch'

const URL = {
    GET: '/notebooks',
    ADD: '/notebooks',
    UPDATE: '/notebooks/:id',
    DELETE: '/notebooks/:id'
}

export default {
    getAll(){
        return fetch(URL.GET)
    },

    updateNotebook(notebookId, {title=''}={title:''}) {
        return fetch(URL.UPDATE.replace(':id', notebookId), 'patch', {title})
    },

    deleteNotebook(notebookId) {
        return fetch(URL.DELETE.replace(':id', notebookId), 'delete')
    },

    addNotebook({title=''}={title:''}){
        return fetch(URL.ADD, 'post', {title})
    }
}