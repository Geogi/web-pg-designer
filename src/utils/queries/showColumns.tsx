export const showColumns = (table: string) => `
SELECT column_name, is_nullable, data_type
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = '${table}';
`;
