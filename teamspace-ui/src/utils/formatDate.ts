import { format } from "date-fns";
// can also use I18n to customize date format
// import { zhCN, zhHK } from "date-fns/locale";

// Uses local format: https://date-fns.org/v2.22.1/docs/format
export const formatDate = (time?: string | number | Date) => {
  if (!time) {
    return;
  }

  // return format(new Date(time), "Pp", { locale: zhCN });
  return format(new Date(time), "Pp");
};
