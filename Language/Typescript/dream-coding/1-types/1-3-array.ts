{
    // Array
    const fruits: string[] = ['사과', '바나나'];
    const scores: Array<number> = [1,2];

    // string[]와 Array<number>의 다른 점은 readonly를 사용할 수 있는 지 없는 지이다.
    function printArray(fruits: readonly string[]){}

    // Tuple -> interface, type alias, class로 변경해서 사용하는 것이 좋다.
    // 어떤 값이 있는 지 알기가 힘들기 때문에 사용을 지양하는 것이 좋다.
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}