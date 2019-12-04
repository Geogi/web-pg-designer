export const selectVersion = "SELECT VERSION();";
export const showTables = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';";
export const countRows = (table: string) => `SELECT COUNT(*) FROM ${table};`;
