interface SearchField {
 cache: boolean;
 filelds?: string[];
}

interface SearchConfigType {
 defaultSearchFields: SearchField;
 SYS_Status: SearchField;
 SYS_Type: SearchField;

 // BI_Report: {cache: true},
 // LIST_BookingSources: { cache: true },
 // LIST_ServiceRole: { cache: true },
 // BRA_Branch: { cache: true },
 // LIST_BookingStatus: { cache: true },
 // CRM_CONTACT_KhachHang: { cache: true, filelds: ['Code', 'Name', 'MaSoThue', 'SoDienThoai1', 'SoDienThoai2', 'Email', '_uid']},
 // VANTAI_WO_LenhLamViec: { cache: false, filelds: ['Code', 'Name', '_uid']},
 // VANTAI_WO_NhatKyLamViec: { cache: false, filelds: ['Code', 'Name', '_uid']},

 [key: string]: SearchField | ((name: string) => { name: string; value: SearchField });
 getSearchFields(name: string): { name: string; value: SearchField };
}

export const SearchConfig: SearchConfigType = {
 defaultSearchFields: { cache: false, filelds: ['Code', 'Name', '_uid'] },

 SYS_Status: { cache: true },
 SYS_Type: { cache: true },

 getSearchFields(name: string) {
  const result = {
   name: name,
   value: this.defaultSearchFields,
  };
  if (this[name]) {
   result.value = this[name] as SearchField;
  }
  return result;
 },
};
