export const selectVersion = "SELECT VERSION();";
export const showTables = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';";
export const showColumns = (table: string) => `
SELECT column_name, is_nullable, data_type
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = '${table}';`;
export const countRows = (table: string) => `SELECT COUNT(*) FROM ${table};`;
export const showPrimaryKeys = (table: string) => `
SELECT kcu.column_name
FROM information_schema.table_constraints tc
         JOIN information_schema.key_column_usage kcu
              ON tc.constraint_name = kcu.constraint_name
                  AND tc.constraint_schema = kcu.constraint_schema
WHERE tc.table_name = '${table}'
  AND tc.table_schema = 'public'
  AND tc.constraint_type = 'PRIMARY KEY'`;
