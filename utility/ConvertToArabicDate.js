function getArabicMonth(month) {
  const arabicMonths = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return arabicMonths[month];
}

function getArabicDay(day) {
  const arabicDays = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  return arabicDays[day];
}

export const convertToArabicDate = (isoDate) => {
  const date = new Date(isoDate);

  const day = date.getDate();
  const month = getArabicMonth(date.getMonth());
  const dayOfWeek = getArabicDay(date.getDay());

  return `${month} ${day} ${dayOfWeek}`;
};
