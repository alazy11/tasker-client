export const initialState = '';

const SideBarReducer = (state, action)=>{

    console.log("action action",action)
    // console.log("action.type",action.type)

    if(action === 'show') {
        // console.log("show action")
        return state = 'toggle-sidebar';
    } else {
        // console.log("close action")
        return state = '';
    }
}

export default SideBarReducer;