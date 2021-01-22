export{}
{
    /**
     * Intersection Types: &
     */
    type Student = {
        name : string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker){
        // 합집합을 의미함.
        console.log(person.name, person.employeeId, person.score, person.work());
    }

    internWork({
        name: 'ellie',
        score: 1,
        employeeId: 123,
        work: () => {}
    })
}