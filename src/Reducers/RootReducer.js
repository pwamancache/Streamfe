//import Apicall from '../Api/Apicall.js'
let initialstate = []

function RootReducer(state=initialstate,action) {
    switch (action.type)
    {
        case 'FetchGuidelines':
            return action.payload
        case 'FetchGuidePreview':
            return action.payload
        case "AddLayout":
            console.log([...state,action.payload])
            return [...state,action.payload]
        case "FetchLayout":
            console.log("layout value is" + state)
            return state
        default: 
        return state
    }
  
}

export default RootReducer;