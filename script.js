// Sample Account Creation and Attendance Functions
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    console.log(`Account created! Username: ${username}, Role: ${role}`);

    alert('Account created successfully!');
});

document.getElementById('attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;
    const absenceReason = document.getElementById('absenceReason').value;

    if (attendanceStatus === 'absent' && absenceReason === '') {
        alert('Please provide a reason for absence.');
        return;
    }

    console.log(`Attendance marked! Student: ${studentName}, Status: ${attendanceStatus}`);
    
    if (attendanceStatus === 'absent') {
        console.log(`Absence Reason: ${absenceReason}`);
    }

    alert('Attendance marked successfully!');
});
