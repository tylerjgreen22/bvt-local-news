
const staffData = [
    { name: 'Name 1', email: 'name1@bvtnews.com', phone: '123-456-7890' },
    { name: 'Name 2', email: 'name2@bvtnews.com', phone: '987-654-3210' },
];

function displayStaff() {
    const staffList = document.getElementById('staff-members');
    staffData.forEach(staffMember => {
        const staffItem = document.createElement('li');
        staffItem.textContent = `Name: ${staffMember.name}, Email: ${staffMember.email}, Phone: ${staffMember.phone}`;
        staffList.appendChild(staffItem);
    });
}

displayStaff();
