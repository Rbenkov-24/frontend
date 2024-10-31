import { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import '../../../styles/workSpace.css';

// UserManagement component for managing and displaying student data
function UserManagement() {
  // State for storing a list of students and managing form inputs
  const [students, setStudents] = useState([]); // Array for storing students' data fetched from the database

  // Tracks the specific student being edited; this will be set to a student's data when "Edit" is clicked
  const [editingStudent, setEditingStudent] = useState(null); 

  // State for storing new student form data, initialized with empty fields
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  // Fetches students' data when the component mounts, using an effect hook
  useEffect(() => {
    fetchStudents(); // Calls the function to load data from the server/API
  }, []);

  // Function to fetch all students from the API and set them to state
  const fetchStudents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data); // Updates the students list in the component’s state
    } catch (error) {
      console.error('Error fetching students:', error); // Logs an error message if fetching fails
    }
  };

  // Function to handle adding a new student to the database via a POST request
  const handleAddStudent = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent), // Sends the new student data to the API
      });
      
      if (!response.ok) {
        throw new Error('Failed to add student');
      }
      
      setNewStudent({ name: '', email: '', password: '', age: '' }); // Resets form fields after successful addition
      fetchStudents(); // Refreshes the students list to reflect the new addition
    } catch (error) {
      console.error('Error adding student:', error); // Logs an error if adding fails
    }
  };

  // Function to handle updating an existing student's data
  const handleUpdateStudent = async (e) => {
    e.preventDefault(); // Prevents default form behavior
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students/${editingStudent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingStudent), // Sends the updated student data to the API
      });

      if (!response.ok) {
        throw new Error('Failed to update student');
      }

      setEditingStudent(null); // Clears the editing mode/modal upon successful update
      fetchStudents(); // Refreshes the students list to display updated data
    } catch (error) {
      console.error('Error updating student:', error); // Logs an error if updating fails
    }
  };

  // Function to delete a specific student from the database
// Takes in a student's unique identifier (id) as a parameter to specify which student to delete
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) { // Confirms deletion with the user
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete student');
        }

        fetchStudents(); // Refreshes the students list to reflect the deletion
      } catch (error) {
        console.error('Error deleting student:', error); // Logs an error if deleting fails
      }
    }
  };

  return (
    <div className="app-container">
      <AdminSidebar />
      <div className="page-content">
        <div className="user-management">
          <h2>User Management</h2>
          
          {/* Section with a form to add a new student */}
          <div className="add-student-section">
            <h3>Add New Student</h3>
            <form onSubmit={handleAddStudent} className="add-student-form">
              <input
                type="text"
                placeholder="Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={newStudent.password}
                onChange={(e) => setNewStudent({...newStudent, password: e.target.value})} required
              />
              <input
                type="number"
                placeholder="Age"
                value={newStudent.age}
                onChange={(e) => setNewStudent({...newStudent, age: e.target.value})}
                required
              />
              <button type="submit">Add Student</button>
            </form>
          </div>

          {/* Section for displaying the list of students */}
          <div className="students-list-section">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>
                      <button onClick={() => setEditingStudent(student)}>Edit</button>
                      <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for editing student details */}
          {editingStudent && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Edit Student</h2>
                <form onSubmit={handleUpdateStudent} className="edit-student-form">
                  <input
                    type="text"
                    placeholder="Name"
                    value={editingStudent.name}
                    onChange={(e) => setEditingStudent({...editingStudent, name: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={editingStudent.email}
                    onChange={(e) => setEditingStudent({...editingStudent, email: e.target.value})}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={editingStudent.password}
                    onChange={(e) => setEditingStudent({...editingStudent, password: e.target.value})} 
                    required
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={editingStudent.age}
                    onChange={(e) => setEditingStudent({...editingStudent, age: e.target.value})}
                    required
                  />
                  <button type="submit">Update Student</button>
                </form>
                <button onClick={() => setEditingStudent(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;