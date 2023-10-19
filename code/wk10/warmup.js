/*
You have an array of student objects with properties:
• name: The student's name.
•attendance: An array representing daily attendance (true for present, false for absent) for the entire week.
• testScores: An array of test scores for the week (scores are on a scale of 0 to 100).
Your tasks are as follows:
1. Calculate Attendance Percentage: write function getAttendanceRate (student) to calculate the total attendance percentage for each student over the week. Identify students who attended class less than 80% of the time.
Example: If a student has attended 4 out of 5 days, their attendance percentage is (4 / 5) * 100 = 80
2. Calculate Average Test Score: write function getAvgScore (student) to calculate the average test score for each student based on their test scores for the week. Example: If a student's test scores are [88, 92, 85, 78, 90], their
average test score is (88 + 92 + 85 + 78 + 90) / 5 = 86.6.
3. Identify Underperform Students: write function underPerformStudents(students) that return students with the properties, name, attendanceRate, avgScore, who meet the following criteria:
•They attended class less than 80% of the time (attendance percentage < 80%)
•They scored below 70 on average in tests.
•Example: If a student attended class 3 out of 5 days (attendance percentage = 60%) and their average test score is 65, they meet both criteria and return [ { name: 'Isabella', attendanceRate: 60, avgScore: 69.4 }]
*/
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
    let calculateAttendance = 0
    student.attendance.forEach(element => {
        if (element) calculateAttendance++
    })
    return calculateAttendance * 100 / student.attendance.length
}

function getAvgScore(student) {
    const sumScore = student.testScores.reduce((total, currentScore) => total + currentScore)
    return sumScore / student.testScores.length
}

function underPerformStudents(students) {
    const underPerform = students.filter((student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70)
    const sendStd = underPerform.map((student) => {
        return {
            name: student.name,
            attendanceRate: getAttendanceRate(student),
            avgScore: getAvgScore(student)
        }
    })
    return sendStd
}

console.log(getAttendanceRate(students[0]))
console.log(underPerformStudents(students))