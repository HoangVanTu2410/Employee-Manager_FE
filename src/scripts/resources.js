// Tiêu đề của phần danh sách nhân viên
export const EMPLOYEELIST_TITLE = {
  EMPLOYEE: "Nhân viên",
  ADD_EMPLOYEE: "Thêm mới nhân viên",
  SEARCH_BY_CODE_NAME: "Tìm theo mã, tên nhân viên",
  EMPLOYEE_CODE: "MÃ NHÂN VIÊN",
  EMPLOYEE_NAME: "TÊN NHÂN VIÊN",
  GENDER: "GIỚI TÍNH",
  DATEOFBIRTH: "NGÀY SINH",
  IDENTITYNUMBER: "SỐ CMND",
  JOBPOSITION: "CHỨC DANH",
  DEPARTMENT_NAME: "TÊN ĐƠN VỊ",
  BANKACCOUNTNUMBER: "SỐ TÀI KHOẢN",
  BANKNAME: "TÊN NGÂN HÀNG",
  BANKBRANCHNAME: "CHI NHÁNH TK NGÂN HÀNG",
  FUNCTION: "CHỨC NĂNG",
  EDIT: "Sửa",
  REPRODUCTION: "Nhân bản",
  DELETE: "Xóa",
  STOP_USING: "Ngừng sử dụng",
  TOTAL: "Tổng số:",
  RECORD: "bản ghi",
  PREVIOUS: "Trước",
  AFTER: "Sau",
  CONFIRM_DELETE_PREFIXES: "Bạn có thật sự muốn xóa Nhân viên <",
  CONFIRM_DELETE_SUFFIXES: "> không?",
};

// Tiêu đề của form chi tiết nhân viên
export const EMPLOYEEDETAIL_TITLE = {
  ADD_EMPLOYEE: "Thêm nhân viên",
  EDIT_EMPLOYEE: "Sửa thông tin nhân viên",
  IS_CUSTOMER: "Là khách hàng",
  IS_SUPPLIER: "Là nhà cung cấp",
  CODE: "Mã",
  NAME: "Tên",
  DATEOFBIRTH: "Ngày sinh",
  GENDER: "Giới tính",
  MALE: "Nam",
  FEMALE: "Nữ",
  OTHER: "Khác",
  DEPARTMENT: "Đơn vị",
  IDENTITYNUMBER: "Số CMND",
  IDENTITYISSUEDATE: "Ngày cấp",
  JOBPOSITION: "Chức danh",
  IDENTITYISSUEPLACE: "Nơi cấp",
  ADDRESS: "Địa chỉ",
  PHONENUMBER: "ĐT di động",
  LANDLINENUMBER: "ĐT cố định",
  EMAIL: "Email",
  BANKACCOUNTNUMBER: "Tài khoản ngân hàng",
  BANKNAME: "Tên ngân hàng",
  BANKBRANCHNAME: "Chi nhánh",
  CANCEL: "Hủy",
  SAVE: "Cất",
  SAVE_AND_ADD: "Cất và thêm",
};

// Tooltip của các icon button và các trường viết tắt
export const TOOLTIP = {
  HELP: "Giúp",
  CLOSE: "Đóng",
  RELOAD: "Lấy lại dữ liệu",
  EXPORT_EXCEL: "Xuất ra excel",
  IDENTITYNUMBER: "Số chứng minh nhân dân",
  PHONENUMBER: "Điện thoại di động",
  LANDLINENUMBER: "Điện thoại cố định",
  EMPLOYEECODE_NOT_NULL: "Mã nhân viên không được để trống.",
  EMPLOYEENAME_NOT_NULL: "Tên nhân viên không được để trống.",
  DEPARTMENT_NOT_NULL: "Đơn vị không được để trống.",
  BANK_BRANCH_NAME: "Chi nhánh tài khoản ngân hàng",
};

// Tiêu đề của dialog
export const DIALOG_TITLE = {
  NOTIFICATION: "Thông báo",
  DELETE_EMPLOYEE: "Xóa nhân viên?",
};

// Tiêu đề của loading
export const LOADING_TITLE = "Đang xử lý";

// Nội dung của toast
export const TOAST_CONTENT = {
  SUCCESS: "Thành công!",
  ERROR: "Lỗi!",
  WARNING: "Cảnh báo!",
  ADD_EMPLOYEE_SUCCESS: "Nhân viên đã được thêm.",
  EDIT_EMPLOYEE_SUCCESS: "Nhân viên đã được chỉnh sửa.",
  DELETE_EMPLOYEE_SUCCESS: "Nhân viên đã được xóa.",
};

// Tên của button
export const BUTTON_NAME = {
  YES: "Có",
  NO: "Không",
  ACCEPT: "Đồng ý",
};

// Tiêu đề của navbar
export const NAVBAR_TITLE = {
  TITLE: "CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUY PHÚC",
  USER_NAME: "Hoàng Văn Tú",
};

// Tiêu đề các item của siderbar
export const SIDEBAR_ITEM_TITLE = {
  OVERVIEW: "Tổng quan",
  CASH: "Tiền mặt",
  DEPOSIT: "Tiền gửi",
  SHOPPING: "Mua hàng",
  SELL: "Bán hàng",
  BILL: "Quản lý hóa đơn",
  STOCK: "Kho",
  TOOL: "Công cụ dụng cụ",
  ASSET: "Tài sản cố định",
  TAX: "Thuế",
  PRICE: "Giá thành",
  GENERAL: "Tổng hợp",
  BUDGET: "Ngân sách",
  REPORT: "Báo cáo",
  FINANCE: "Phân tích tài chính",
};

// Tên các lỗi
export const ERROR_NAME = {
  EXCEPTION: "Có lỗi xảy ra vui lòng liên hệ MISA!",
  DUPLICATECODE_PREFIXES: "Mã nhân viên <",
  DUPLICATECODE_SUFFIXES: "> đã tồn tại trong hệ thống, vui lòng kiểm tra lại!",
  INVALIDDATA: "Dữ liệu đầu vào không hợp lệ, vui lòng kiểm tra lại!",
};

// Số bản ghi trên 1 trang
export const NUMBER_OF_RECORDS = [
  { key: 10, value: "10 bản ghi trên một trang" },
  { key: 20, value: "20 bản ghi trên một trang" },
  { key: 30, value: "30 bản ghi trên một trang" },
  { key: 50, value: "50 bản ghi trên một trang" },
  { key: 100, value: "100 bản ghi trên một trang" },
];
