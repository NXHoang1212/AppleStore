export const FormatDate = (date: Date) => {
    if (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    }
    return '';
};

export const FormatDate2 = (date: string) => {
    if (date) {
        const day = date.split('T')[0].split('-')[2];
        const month = date.split('T')[0].split('-')[1];
        const year = date.split('T')[0].split('-')[0];
        return `${day}-${month}-${year}`;
    }
    return '';
}

export const FormatDate3 = (date: string) => {
    if (date) {
        const time = date.split('T')[1].split('.')[0];
        const day = date.split('T')[0].split('-')[2];
        const month = date.split('T')[0].split('-')[1];
        const year = date.split('T')[0].split('-')[0];
        return `${day}-${month}-${year} ${time}`;
    }
    return '';
}