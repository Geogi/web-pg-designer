export const createTable = (name: string) => `
CREATE TABLE ${name} (
    id BIGSERIAL PRIMARY KEY
);
`;
