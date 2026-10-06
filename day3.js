import fs from 'fs';
const fileName = "Student.txt";
async function createFile() {
    try {
        await fs.writeFile(fileName, "Name: Himanshu\n Email: himanshu@example.com");
        console.log("File created successfully");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}
async function readFile() {
    try {
        await fs.readFile()
    }
    catch (err) {
        console.error("Error reading file:", err);
    }
}
async function updateFile() {
    try {
        await fs.appendFile(fileName, "\nCourse: B.Tech CSE");
        console.log("File updated successfully");
    } catch (err) {
        console.error("Error updating file:", err);
    }
}
async function deleteFile() {
    try {
        await fs.unlink(fileName);
        console.log("File deleted successfully");
    } catch (err) {
        console.error("Error deleting file:", err);
    }
}