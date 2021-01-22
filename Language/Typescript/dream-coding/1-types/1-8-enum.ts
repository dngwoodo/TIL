{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    // 최대한 이넘에 가깝게 만들 수는 있다.
    const DAYS_ENUM = Object.freeze({
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2,
    })

    // TypeScript
    enum Days {
        // 값을 생략하면 0 부터 시작
        // 값을 적어주면 그 숫자부터 시작
        // 값을 string으로 주면 전부 적어줘야 함
        Monday, // 0
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4 
        Saturday, // 5
        Syunday // 6
    }
    let day: Days = Days.Saturday;
    day = 10; // 이것처럼 이넘을 사용하게 되면 타입을 안전하게 보장해주지 않는다. 그래서 안쓰는 것이 좋다.

    // 유니온을 사용하면 거의 완벽하게 이넘을 대체할 수 있다. 또한 타입을 안전하게 보장해준다.
    // 모바일 클라이언트와 통신할 때는 이넘을 사용해야 될 수도 있다.
    type Days2 = 'Monday' | 'Tuesday' | 'Wednesday';
}