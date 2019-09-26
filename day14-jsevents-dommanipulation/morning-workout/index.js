const nidIsValid = (nid) => {
    const intNID = parseInt(nid, 10);

    if (Number.isNaN(intNID)) {
        return false;
    }

    if (inNID < 1000000000 || intNID > 9999999999) {
        return false;
    }

    if (intNID % 11 !== 0) {
        return false;
    }  

    const month = parseInt(nid[2] + nid[3], 10);
    if (month < 51) {
        if (month < 1 || month > 12) {
            return false;
        }
    } else if (month > 62) {
        return false;
    }

    const day = parseInt()
}