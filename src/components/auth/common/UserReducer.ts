export type AuthActionType = 
    | {
        type: "AUTH_USERNAME",
        payload: string
      }
    | {
        type: "AUTH_PASSWORD",
        payload: string
      }
    | {
        type: "AUTH_PASSWORD_CONFIRM",
        payload: string
      }
    | {
        type: "AUTH__EMAIL",
        payload: string
      }
    | {
        type: "AUTH_RESULT_MSG",
        payload: string
      }
    | {
        type: "AUTH_IS_SUBMIT_ENABLED",
        payload: boolean
      }


interface AuthUserState {
    userName: string;
    password: string;
    passwordConfirm: string;
    email: string;
    resultMsg: string;
    isSubmitDisabled: boolean;
}

export const initialAuthUserState: AuthUserState = {
    userName: "",
    password: "",
    passwordConfirm: "",
    email: "",
    resultMsg: "",
    isSubmitDisabled: true,
}
const userReducer = (state: AuthUserState = initialAuthUserState, action: AuthActionType): AuthUserState => {
    switch (action.type) {
        case "AUTH_USERNAME":
            return { ...state, userName: action.payload };
        case "AUTH_PASSWORD":
            return { ...state, password: action.payload };
        case "AUTH_PASSWORD_CONFIRM":
            return { ...state, passwordConfirm: action.payload };
        case "AUTH__EMAIL":
            return  {...state, email: action.payload };
        case "AUTH_RESULT_MSG":
            return { ...state, resultMsg: action.payload };
        case "AUTH_IS_SUBMIT_ENABLED":
            return { ...state, isSubmitDisabled: action.payload }
        default:
            return { ...state, resultMsg: "A failure has ocurred." };
    }
}

export default userReducer;