type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = JSONValue | Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.reduce((acc: JSONValue[], cur: JSONValue) => {
            let value = compactObject(cur);

            if (value) {
                acc.push(value);
            }

            return acc;
        }, [] as JSONValue[]);
    }

    // Check if it's an object
    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc: Record<string, JSONValue>, key: string) => {
            let value = compactObject(obj[key]);

            if (value) {
                acc[key] = value;
            }

            return acc;
        }, {} as Record<string, JSONValue>);
    }

    // If it's neither an array nor an object, return the value (which can be a string, number, or boolean)
    return obj || null;
};

console.log('compactObject()', compactObject({"a": null, "b": [false, 1]}))
console.log('compactObject()', compactObject([null, 0, false, 1]))
