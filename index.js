// Глубокое копирование объекта методом рекурсии

const complexObject = {
  name: "Test Object",
  age: 42,
  isActive: true,
  scores: [95, 88, 76, 100],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  tags: ["test", "example", "sample"],
  metadata: {
    version: 1.0,
    contributors: [
      { name: "Alice", role: "Author" },
      { name: "Bob", role: "Reviewer" },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
    preferences: {
      language: "en",
      timezone: "UTC",
    },
  },
  preferences: {
    colorScheme: "light",
    fontSize: 14,
    layout: {
      header: "fixed",
      footer: "static",
    },
  },
  history: [
    { event: "created", timestamp: "2023-10-01T10:00:00Z" },
    { event: "updated", timestamp: "2023-10-02T12:00:00Z" },
  ],
};

function getCopyObject(object) {
  if (Array.isArray(object)) {
    const copyArray = [];
    for (let item of object) {
      copyArray.push(getCopyObject(item));
    }
    return copyArray;
  } else if (typeof object === "object") {
    const copyObject = {};
    for (let key in object) {
      copyObject[key] = getCopyObject(object[key]);
    }
    return copyObject;
  } else {
    return object;
  }
}

const newObject = getCopyObject(complexObject);

console.log(newObject);

// Tests

console.log(complexObject == newObject);

console.log(complexObject.scores == newObject.scores);

console.log(complexObject.address == newObject.address);

console.log(complexObject.address.geo == newObject.address.geo);
