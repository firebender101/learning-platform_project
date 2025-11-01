function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

let enrolledCourses = [];

function enrollCourse(courseName) {
    if (!enrolledCourses.includes(courseName)) {
        enrolledCourses.push(courseName);
        updateDashboard();
        alert(`Enrolled in ${courseName}!`);
    } else {
        alert(`Already enrolled in ${courseName}.`);
    }
}

function updateDashboard() {
    const list = document.getElementById('enrolledCourses');
    list.innerHTML = '';
    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        list.appendChild(li);
    });
}