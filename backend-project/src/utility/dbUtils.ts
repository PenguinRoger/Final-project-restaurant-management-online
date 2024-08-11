
const toUpper = (value) => {
    if (!(value === null || value === undefined)) {
        return value.toUpperCase();
    } else {
        return value;
    }
}

const migrationDefaultValue_Boolean = () => {
    if (process.env.APP_DB_DIALECT === 'mysql') {
        return 0;
    } else {
        return false;
    }
}

export { toUpper, migrationDefaultValue_Boolean };