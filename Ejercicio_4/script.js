const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log("Finding common courses between two students:");
console.log("Student 1 courses:", student1Courses);
console.log("Student 2 courses:", student2Courses);

for (let curso1 of student1Courses) {
    for (let curso2 of student2Courses) {
        if (curso1 === curso2) {
            console.log("Common course: " + curso1);
            break; // Evita duplicados o mas de un resultado, efectivo si solo se busca una coincidencia.
        }
    }
}
