export const saveName = (value) => {
    return {
        type: "SAVE_NAME",
        value: value
    };
};

export const saveAddress = (value) => {
    return {
        type: "SAVE_ADDRESS",
        value: value
    };
};

export const savePhone = (value) => {
    return {
        type: "SAVE_PHONE",
        value: value
    };
};

export const saveRecord = () => {
    return {
        type: "SAVE_RECORD"
    };
};