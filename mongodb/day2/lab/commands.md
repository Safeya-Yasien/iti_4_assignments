<!-- display the dbs -->

show dbs

<!-- create a new db -->

use FacultySystemDB

<!-- create a new collection -->

db.createCollection("student")

<!-- display the collections -->

show collections

<!-- display data in collection -->

db.student.find()

<!-- insert data into collection using insert method -->
<!--i'ts not the best way to insert data into collection it was the oldest way -->

db.student.insert({"name":"Ahmed","age":20,"address":"Cairo"})

<!-- insert data into collection using insertMany method -->

db.student.insertMany([{"name":"Ahmed","age":20,"address":"Cairo"},{"name":"Ahmed","age":20,"address":"Cairo"}])

db.student.insertMany([
{FirstName:"Mohamed", LastName:"Ahmed", Age:21, Faculty:{Name:"FCI" , Address: "Mina"}, Grades:[{ CourseName: "c++", Grade: 60, Pass: true }, {CourseName:"c", Grade:80, Pass:true}], IsFired:false},
{FirstName:"Mostafa", LastName:"Morad", Age:20, Faculty:{Name:"FCAI" , Address: "Cairo"}, Grades:[{ CourseName: "java", Grade: 40, Pass: false }, {CourseName:"html", Grade:95, Pass:true}], IsFired:true},
{FirstName: "Nour", LastName: "Hassan", Age: 19, Faculty: null, Grades: [{ CourseName: "Network", Grade: 75, Pass: true }], IsFired: false},
{FirstName: "Ma7moud", LastName: "Omar", Age: 24, Faculty: { Name: "Science", Address: "Giza" }, Grades: [{ CourseName: "Physics", Grade: 70, Pass: true }], IsFired: false}
])

<!-- insert data into collection using insertOne method -->

db.student.insertOne({"name":"Ahmed","age":20,"address":"Cairo"})

db.student.insertOne({
FirstName:"Ahmed",
LastName:"Mohamed",
Age:20,
Faculty:{Name:"FCAI" , Address: "Cairo"},
Grades:[{ CourseName: "c#", Grade: 60, Pass: true }, {CourseName:"c++", Grade:80, Pass:true}],
IsFired:false
})

<!-- display student with specific firstName -->

db.student.find({"FirstName":"Ahmed"})

<!-- • Students who his First Name=Ahmed, or Last Name= Ahmed. -->

<!-- db.student.find({$or:[{"FirstName":"Ahemd"}, {"LastName":"Ahemd"}]}) -->

db.student.find({$or:[{"FirstName":"Ahmed"}, {"LastName":"Ahmed"}]})

<!-- student with first name not Ahmed -->

db.student.find({ FirstName: { $ne: "Ahmed" } })

<!-- student with age less than 21 -->

db.student.find({ Age: { $lt: 21 } })

<!-- student with fired true -->

db.student.find({ IsFired: true })

<!-- • Students with Age more than or equal to 21, and their faculty isn't NULL. -->

db.student.find({Age:{$gte:21}, Faculty:{$ne:null}})

<!-- get specific student with specific attributes -->

db.student.find(
{ FirstName: "Mostafa" },
{ FirstName: 1, LastName: 1, IsFired: 1}
)

<!-- udpate student with specific firstName -->

db.student.updateOne(
{ FirstName: "Ma7moud" },
{ $set: { FirstName: "Mahmoud" } }
)

<!-- display student after update -->

db.student.find({ FirstName: "Mahmoud" })

<!-- update many students with specific firstName -->

db.student.updateMany(
{ LastName: "Ahmed" },
{ $set: { IsFired: false } }
)

<!-- display student after update -->

db.student.find({FirstName: 'Ahmed'})

<!-- update student using replaceOne method -->

db.student.replaceOne({FirstName: "Mahmoud"},{FirstName: "Mahmoud",LastName: "Sami", Faculty: { Name: "Law", Address: "Cairo" }, Grades: [{ CourseName: "Math", Grade: 60, Pass: true }], IsFired: false})

<!-- display student after update -->

db.student.find({FirstName: 'Mahmoud'})

<!-- delete student with fired true  -->

db.student.deleteMany({IsFired: true})

<!-- ensure that student with fired true is deleted -->

db.student.find({ IsFired: true })

<!-- delete student collection -->

db.student.drop()

<!-- to ensure that student collection is deleted -->

show collections

<!-- delete whole database -->

db.dropDatabase()

<!-- new database -->

use FacultySystemV2
db.faculty.insertMany([{FacultyName: "FCI", Address: "Minia" }, {FacultyName: "Las", Address: "Cairo" }])
db.faculty.find()
db.course.insertMany([{CourseName: "MongoDB", FinalMark: 100 },{CourseName: "NodeJS", FinalMark: 100 }, { _id: 103, CourseName: "React", FinalMark: 100 }])
db.course.find()
db.student.insertMany([{FirstName: "Ahmed", LastName: "Ali", IsFired: false, FacultyID: 1, Grades: [{ CourseID: 101, Grade: 90 }, { CourseID: 102, Grade: 85 }]}, {FirstName: "Sara", LastName: "Yassin", IsFired: false, FacultyID: 2, Grades: [{ CourseID: 103, Grade: 95 }]}
])
db.student.find()
