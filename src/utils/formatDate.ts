export const formatDate = (dateString: string, locale="en-US") => {
 if(!dateString) return "unknown date";
 return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric"
 })
}