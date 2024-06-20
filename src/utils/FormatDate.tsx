export const FormatDate = (date: Date) => {
   //kiểm tra xem date có phải là dạng ngày tháng năm không và trả về chuỗi ngày tháng năm nếu đúng và ngược lại
    if (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    }
    return '';
};
