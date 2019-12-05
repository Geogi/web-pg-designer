export const showPrimaryKeys = (table: string) => `
SELECT kcu.column_name
FROM information_schema.table_constraints tc
         JOIN information_schema.key_column_usage kcu
              ON tc.constraint_name = kcu.constraint_name
                  AND tc.constraint_schema = kcu.constraint_schema
WHERE tc.table_name = '${table}'
  AND tc.table_schema = 'public'
  AND tc.constraint_type = 'PRIMARY KEY';
`;
