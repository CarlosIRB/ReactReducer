// definir el reducer de contactos como una funcion que recibe dos parametros
//state y action

export const ContactosReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(contacto => contacto.id !== action.payload);
        default:
            return state;
    }
}