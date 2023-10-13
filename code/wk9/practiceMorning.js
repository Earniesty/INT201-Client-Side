const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    }
]

function getAttendanceRate(student) {
    let attendanceRate = 0
    student.attendance.forEach(element => {
        if (element) attendanceRate++
    })
    return attendanceRate * 100 / student.attendance.length
}

function getAvgScore(student){
    let avgScores = 0
    student.testScores.forEach(element => avgScores += element)
    return avgScores / student.testScores.length
}

function underPerformStudents(students){
    let underStudents = []
    students.forEach(student => {
        const name = student.name
        const attendanceRate = getAttendanceRate(student)
        const avgScore = getAvgScore(student)
        if (attendanceRate < 80 || avgScore < 70) {
            underStudents.push({
                name,
                attendanceRate,
                avgScore
            })
        }
    })
    return underStudents.length === 0 ? 'Not have students with under perform.' : underStudents
}

console.log(getAttendanceRate(students[0]))
console.log(getAvgScore(students[0]))
console.log(underPerformStudents(students))