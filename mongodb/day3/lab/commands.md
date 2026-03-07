##### Task 1: Create a Unique Index on FacultyName

###### Step 1: Open the Collection

1.  Open MongoDB Compass.

2.  Connect to your local server (localhost:27017).

3.  From the left sidebar, click on the database [FacultySystemV2].

4.  Click on the collection named faculty.

###### Step 2: Access the Indexes Tab

5. In the main window, look at the tabs at the top (Documents, Aggregations, Schema, Indexes).

6. Click on the Indexes tab. You will see the default _id_ index already there.

###### Step 3: Create a Unique Index on FacultyName

7. Click the Create Index button (usually a green button on the right).

8. Index Fields: Type FacultyName.

9. Select Type: Choose 1 (asc).

10. Options: Check the box that says Create unique index.

11. Click Create Index.

Now you will see FacultyName_1 appearing in the list of indexes with the property "unique".

###### Step 4: Testing the Index (Verification)

Test A: Search Efficiency

1. Go to the Documents tab.
2. In the Filter bar (the {} bar), type: { "FacultyName": "FCI" }.
3. Click Find. The result should appear instantly.

Test B: Uniqueness Enforcement (The Error Test)

1. Go to the Documents tab.

2. Click Add Data -> Insert Document.

3. Try to add a faculty with a name that already exists:

```
    {
    "FacultyName": "FCI",
    "Address": "Anywhere"
    }
```

##### Task 2: Sum of Final Mark (Course Collection)

###### Step 1: Open the Course Collection

1. In the left sidebar of MongoDB Compass, click on the Course collection under the FacultySystemV2 database.

###### Step 2: Access the Aggregations Tab

2. Click the Aggregations tab at the top of the screen (located between Documents and Schema).

###### Step 3: Add the $group Stage

3. In the first stage box, click the dropdown menu that says Select Stage and choose $group.

4. In the text editor for that stage, delete the placeholder code and paste this:

```
{
    _id: null,
    TotalFinalMark: { $sum: "$FinalMark" }
}
```

we write id:null to tell MongoDB to group all documents together and sum the FinalMark field.

##### Task 3: Implement One-to-Many Relation (Student to Course)

###### Step 1: Get the Course IDs

1. Go to Student collection
2. Find your target student (e.g. "Ahmed")
3. Click the Edit (pencil) icon on his document
4. Add a new field manually:
   ````"CourseIDs": [
   ObjectId("...courseID1..."),
   ObjectId("...courseID2...")
   ]```
   ````

Copy real \_id values from your Course collection first 5. Click Update to save 6. Display student with his courses (Aggregation) 7. Stay in Student collection → Aggregations tab 8. Stage 1 → $match:

    ```{ "FirstName": "Ahmed" }
    ```

9. Click + Add Stage → $lookup:

   ```{
   "from": "Course",
   "localField": "CourseIDs",
   "foreignField": "_id",
   "as": "StudentCourses"
   }
   ```

##### Task 4: Implement One-to-Many Relation (Student to Course)
