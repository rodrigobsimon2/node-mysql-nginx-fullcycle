export default function generateFakeName() {
    const firstNames = ['John', 'Jane', 'David', 'Emily', 'Michael', 'Sophia', 'Daniel', 'Olivia', 'Liam', 'Emma', 'Christopher', 'Ava', 'Matthew', 'Isabella', 'Andrew', 'Mia'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}
