{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'dongwoo',
        age: 28
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}